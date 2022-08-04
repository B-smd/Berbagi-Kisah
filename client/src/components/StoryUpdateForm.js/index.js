import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { UPDATE_STORY } from '../../utils/mutations';
import { QUERY_STORIES, QUERY_ME } from '../../utils/queries';

import Auth from '../../utils/auth';

const StoryUpdateForm = ({storyId, storyText}) => {
  const [storyText, setStoryText] = useState(storyText);

  const [updateStory, { error }] = useMutation(UPDATE_STORY, {
    update(cache, { data: { updateStory } }) {
      try {
        const { stories } = cache.readQuery({ query: QUERY_STORIES });

        cache.writeQuery({
          query: QUERY_STORIES,
          data: { stories: stories },
        });
      } catch (e) {
        console.error(e);
      }

      // update me object's cache
      const { me } = cache.readQuery({ query: QUERY_ME });
      cache.writeQuery({
        query: QUERY_ME,
        data: { me: { ...me, stories: stories } },
      });
    },
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      await updateStory({
        variables: {
          storyId,
          storyText,
          storyAuthor: Auth.getProfile().data.username,
        },
      });

      setStoryText('');
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === 'storyText' ) {
      setStoryText(value);
    }
  };

  return (
    <div>
      <h3>What's on your mind?</h3>

      {Auth.loggedIn() ? (
        <>

          <form
            className="flex-row justify-center justify-space-between-md align-center"
            onSubmit={handleFormSubmit}
          >
            <div className="col-12 col-lg-9">
              <textarea
                name="storyText"
                value={storyText}
                className="form-input w-100"
                style={{ lineHeight: '1.5', resize: 'vertical' }}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="col-12 col-lg-3">
              <button className="btn btn-primary btn-block py-3" type="submit">
                Memperbarui kisah
              </button>
            </div>
            {error && (
              <div className="col-12 my-3 bg-danger text-white p-3">
                {error.message}
              </div>
            )}
          </form>
        </>
      ) : (
        <p>
          Kamu harus masuk untuk memperbarui kisah. Silahkan{' '}
          <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
        </p>
      )}
    </div>
  );
};

export default StoryUpdateForm;
