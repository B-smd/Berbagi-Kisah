const express = require('express');
const db = require('./config/connection');
const routes = require('./routes');


const app = express();
const PORT = process.env.PORT || 5000 
// 3001;
// http://localhost:5000/api/stories/
// 

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server

db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`App listening on port ${PORT}!`);
    });
})