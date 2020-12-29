const express = require('express');
// const session = require('express-session');
const bodyParser = require('body-parser');
// const expressValidator = require('express-validator');
const routes = require('./routes/index');
const datefns = require('date-fns');

const app = express();

// use Pug as the template engine
app.set('view engine', 'pug');

// Takes the raw requests and turns them into usable properties on req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Exposes a bunch of methods for validating data. Used heavily on userController.validateRegister
// app.use(expressValidator());

// app.use(session({
//   secret: process.env.SECRET,
//   key: process.env.KEY,
//   resave: false,
//   saveUninitialized: false,
//   store: new MongoStore({ mongooseConnection: mongoose.connection })
// }));

// serve static files from the `public` folder
app.use(express.static(__dirname + '/public'));

// use routes from other file
app.use('/', routes);

// done! we export it so we can start the site in start.js
module.exports = app;