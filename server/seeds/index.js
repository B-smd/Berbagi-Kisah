const seedUsers = require("./user-seed");
const db = require('../config/connection');
const seedStories = require("./story-seed");

const seedAll = async () => {
    await seedUsers(5) ;
    console.log("user seeded");

    await seedStories(5) ;
    console.log("stories seeded");

    process.exit(0);
};

db.once('open', () => {
    seedAll();
})