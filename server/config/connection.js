// const mongoose = require('mongoose');

// mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/A-new-project', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useCreateIndex: true,
//   useFindAndModify: false,
// });

// module.exports = mongoose.connection;


const { connect, connection, default: mongoose } = require('mongoose');

// Node will look for this environment variable and if it exists, it will use it. Otherwise, it will assume that you are running this application locally
const connectionString =
  process.env.MONGODB_URI || 'mongodb://localhost:27017/A-new-project';

connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// log mongoose queries
mongoose.set('debug', true);

module.exports = connection;
