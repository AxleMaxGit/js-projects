const mongoose = require('mongoose');

// import environmental variables from our variables.env file
require('dotenv').config({ path: 'variables.env' });

// Connect to our Database and handle any bad connections
mongoose.connect(process.env.DATABASE, {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.Promise = global.Promise; // Tell Mongoose to use ES6 promises
mongoose.connection.once('open', function(){
  console.log('db connected');
}).on('error', (err) => {
  console.error(`🙅 🚫 🙅 🚫 🙅 🚫 🙅 🚫 → ${err.message}`);
});

// import all of our models
// require('./models/Person');
require('./models/Menu');
require('./models/Person');
require('./models/Tweet');

// Start our app!
const app = require('./app');
app.set('port', process.env.PORT || 4000);

const server = app.listen(app.get('port'), () => {
  console.log(`Express running → PORT ${server.address().port}`);
});