const { Story, User } = require("../models");

const storyController = {
  // get all Stories
  getAllStory(req, res) {
    Story.find({})
      // .populate({
      //   path: "comment",
      //   select: "-__v",
      // })
      .select("-__v")
      .sort({ _id: -1 })
      .then((dbStoryData) => res.json(dbStoryData))
      .catch((err) => {
        console.log(err);
        res.sendStatus(400);
      });
  },

  // get one Thought by id
  getStoryById({ params }, res) {
    Story.findOne({ _id: params.id })
      .populate({
        path: "comments",
        select: "-__v",
      })
      .select("-__v")
      .then((dbStoryData) => {
        if (!dbStoryData) {
          return res.status(404).json({ message: "No story with this id!" });
        }
        res.json(dbStoryData);
      })
      .catch((err) => {
        console.log(err);
        res.sendStatus(400);
      });
  },

  // create story
  // push the created story's _id to the associated user's stories array field
  createStory({ params, body }, res) {
    Story.create(body)
      .then(({ _id }) => {
        return User.findOneAndUpdate(
          { _id: body.userId },
          { $push: { stories: _id } },
          { new: true }
        );
      })
      .then((dbUserData) => {
        if (!dbUserData) {
          return res
            .status(404)
            .json({ message: "Story created but no user with this id!" });
        }

        res.json({ message: "Story successfully created!" });
      })
      .catch((err) => res.json(err));
  },

  // update Story by id
  updateStory({ params, body }, res) {
    Story.findOneAndUpdate({ _id: params.id }, body, {
      new: true,
      runValidators: true,
    })
      .then((dbStoryData) => {
        if (!dbStoryData) {
          res.status(404).json({ message: "No story found with this id!" });
          return;
        }
        res.json(dbStoryData);
      })
      .catch((err) => res.json(err));
  },

  // delete Story
  deleteStory({ params }, res) {
    Story.findOneAndDelete({ _id: params.id })
      .then((dbStoryData) => {
        if (!dbStoryData) {
          return res.status(404).json({ message: "No story with this id!" });
        }

        // remove story id from user's `stories` field
        return User.findOneAndUpdate(
          { stories: params.id },
          { $pull: { stories: params.id } }, //$pull removes from an existing values that match a specified condition.
          { new: true }
        );
      })
      .then((dbUserData) => {
        if (!dbUserData) {
          return res
            .status(404)
            .json({ message: "Story created but no user with this id!" });
        }
        res.json({ message: "Story successfully deleted!" });
      })
      .catch((err) => res.json(err));
  },

  // add comment
  addComment({ params, body }, res) {
    Story.findOneAndUpdate(
      { _id: params.storyId },
      { $addToSet: { comments: body } },
      { new: true, runValidators: true }
    )
      .then((dbStoryData) => {
        if (!dbStoryData) {
          res.status(404).json({ message: "No story with this id" });
          return;
        }
        res.json(dbStoryData);
      })
      .catch((err) => res.json(err));
  },

  // delete comment
  removeComment({ params }, res) {
    console.log(params.commentId)
    Story.findOneAndUpdate(
      { _id: params.storyId },
      { $pull: { comments: { _id: params.commentId } } },
      { new: true }

    )
      .then((dbStoryData) => res.json(dbStoryData))
      .catch((err) => res.json(err));
  },
};

module.exports = storyController;