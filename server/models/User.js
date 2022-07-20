const { Schema, model } = require('mongoose');
const {validateEmail} = require('../utils/validator');

// Schema to create user model
const userSchema = new Schema(
    
    
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    // ***** email for future develop function *****
    // email: {
    //   type: String,
    //   required: true,
    //   unique: true,
    //   validate: [validateEmail, "Please fill a valid email address"]
    // },
    stories: [
        {
            type: Schema.Types.ObjectId,
            ref: "story",
        },
    ]
  },
  {
    timestamps: true,
    id: true,
  },
);

const User = model('user', userSchema);

module.exports = User;
