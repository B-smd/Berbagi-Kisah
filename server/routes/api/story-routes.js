const router = require('express').Router();
const {
  getAllStory,
  getStoryById,
  createStory,
  updateStory,
  deleteStory,
  addComment,
  removeComment,
} = require("../../controllers/story-controller");

// /api/stories
router.route("/").get(getAllStory).post(createStory);

// /api/stories/:id
router
  .route("/:id")
  .get(getStoryById)
  .put(updateStory)
  .delete(deleteStory);

// /api/stories/:storyId/comments
router.route("/:storyId/comments").post(addComment);

// /api/stories/:storyId/comments/:commentId
router.route("/:storyId/comments/:commentId").delete(removeComment);

module.exports = router;