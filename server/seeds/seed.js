const connection = require('../config/connection');
const { Story, User } = require('../models');
const {stories, users} = require('./data');

// Creates a connection to mongodb
connection.once('open', async () => {
    // Delete the entries in the collection
    await User.deleteMany({});
    await Story.deleteMany({});
  
    await Story.collection.insertMany(stories)

    const makeUser = (name) => {
        users.push(
            {
                username: name,
                stories: [stories[0]._id]
            }
        )
    }

    makeUser("testname");
    await User.collection.insertMany(users)





}); 
