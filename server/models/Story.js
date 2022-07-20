const { Schema, model } = require('mongoose');
const { validateEmail } = require('../utils/validator');

// Schema to create Student model
const commentSchema = new Schema(
  {
    body: {
      type: String,
      required: true,
      max: 280,
    },
    name: {
      type: String,
    },

  }, 
  {
    id: true,
    timestamps: true
  }
)
        
        
// Schema to create a story model
const storySchema = new Schema(
    {
        story_text: {
            type: String,
            required: true,
            // max: 280,
            min: 1,
        },
        comments: [
            commentSchema,
        ],
    },
    {
        timestamps: true,
        id: true,
    }

);

const Story = model('story', storySchema);

module.exports = Story;
