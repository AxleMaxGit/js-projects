const express = require('express');
const routes = require('./routes/index');

const app = express();
const port = 7000;

// use Pug as the template engine
app.set('view engine', 'pug');

// serve static files from the `public` folder
app.use(express.static(__dirname + '/public'));

// use routes from other file
app.use('/', routes);

// Create a server that listens on port X,000
const server = app.listen(port, () => {
    console.log(`Express running → PORT ${server.address().port}`);
  });