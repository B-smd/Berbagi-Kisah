import { useMutation } from '@apollo/client';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { REMOVE_STORY, UPDATE_STORY } from '../../utils/mutations';

const StoryList = ({
    stories,
    title,
    refetchStories,
    showTitle = true,
    showUsername = true,
}) => {
    const [updateStoryIdState, setUpdateStoryIdState] = useState('');
    const [textState, setTextState] = useState('');

    // import delete story hook
    const [removeStory, {loading}] = useMutation(REMOVE_STORY);
    const [updateStory] = useMutation(UPDATE_STORY);

      // update state based on form input changes
    const handleChange = (event) => {
        setTextState(event.target.value)
    };

    if (!stories.length) {
        return <h3>No Stories Yet</h3>;
    }

    const handleUpdateBtn = (storyId, storyText) => {
        setUpdateStoryIdState(storyId);
        setTextState(storyText);
    }

    async function deleteStory(story){
        await removeStory({
            variables: {
                storyId: story._id
            }
        })
        refetchStories();
    }


    const handleFormSubmit = async (event) => {
        event.preventDefault();
    
        try {
          await updateStory({
            variables: {
                storyId: updateStoryIdState,
                storyText: textState 
            }
          });
    
            refetchStories();
            setUpdateStoryIdState('');
            setTextState('');
        } catch (err) {
          console.error(err);
        }
      };
    
    

    return (
        <div>
            {!updateStoryIdState ? (
                <div>
                    {showTitle && <h3>{title}</h3>}
                    {stories && 
                        stories.map( (story) => (
                            <div key={story._id} className="card mb-3">
                                <h4 className="card-header bg-primary text-light p-2 m-0">
                                    {showUsername ? (
                                        <>
                                        
                                            <Link
                                                className="text-light"
                                                to={`/profiles/${story.storyAuthor}`}
                                            >
                                                {story.storyAuthor} <br />
                                                <span style={{ fontSize: '1rem' }}>
                                                    posted this story on {story.createdAt}
                                                </span>
                                            </Link>
                                            <br/>
                                            <button onClick={() => deleteStory(story)}>
                                            <img src="https://img.icons8.com/fluent/48/000000/cancel--v1.png" alt="Delete" className="icon" width={"24"}/>
                                            </button>
                                            <button onClick={() => handleUpdateBtn(story._id, story.storyText)}>Update</button>
                                        </>
                                    ):(
                                        <>
                                            <span style={{ fontSize: '1rem' }}>
                                                You posted this story on {story.createdAt}
                                            </span>
                                        </>
                                    )}
                                </h4>
                                <div className="card-body bg-light p-2">
                                    <p>{story.storyText}</p>
                                </div>
                                <Link
                                    className="btn btn-primary btn-block btn-squared"
                                    to={`/stories/${story._id}`}
                                >
                                    Join the discussion on this story.
                                </Link>
                            </div>
                        ))
                    }
                </div>
            ) : (
                <div>
                    {showTitle && <h3>{title}</h3>}
                    {stories && 
                        stories.filter( (story) => story._id === updateStoryIdState).map( (story) => (
                            <div key={story._id} className="card mb-3">
                                <h4 className="card-header bg-primary text-light p-2 m-0">
                                    {showUsername ? (
                                        <>
                                        
                                            <Link
                                                className="text-light"
                                                to={`/profiles/${story.storyAuthor}`}
                                            >
                                                {story.storyAuthor} <br />
                                                <span style={{ fontSize: '1rem' }}>
                                                    posted this story on {story.createdAt}
                                                </span>
                                            </Link>
                                        </>
                                    ):(
                                        <>
                                            <span style={{ fontSize: '1rem' }}>
                                                You posted this story on {story.createdAt}
                                            </span>
                                        </>
                                    )}
                                </h4>
                                
                                <form
                                    className="flex-row justify-center justify-space-between-md align-center"
                                    onSubmit={handleFormSubmit}
                                >
                                <div className="col-12 col-lg-9">
                                    <textarea
                                        className="form-input w-100"
                                        value={textState}
                                        style={{"width": "100%", "height": "500px"}} 
                                        onChange={handleChange}
                                    ></textarea>
                                </div>

                                <div className="col-12 col-lg-3">
                                <button className="btn btn-primary btn-block py-3" type="submit">
                                    Update Story
                                </button>
                                </div>
                            </form>

                            </div>
                        ))
                    }
                </div>
            )}
        </div>
    );
};

export default StoryList;