const express = require('express');
const routes = require('./routes/index');

const app = express();
// const port = 7000;

// use Pug as the template engine
app.set('view engine', 'pug');

// serve static files from the `public` folder
app.use(express.static(__dirname + '/public'));

// use routes from other file
app.use('/', routes);

// done! we export it so we can start the site in start.js
module.exports = app;