const express = require('express');
const people = require('./people.json');

const app = express();
const port = 7000;

// use Pug as the template engine
app.set('view engine', 'pug');

// serve static files from the `public` folder
app.use(express.static(__dirname + '/public'));

// Render views
app.get('/', (req, res) => {
    // res.send(HTML);
    res.render('index', {
        title: 'Homepage',
        people: people.profiles
    })
  });

app.get('/profile', (req, res) => {
    const person = people.profiles.find(p => p.id === req.query.id);
    res.render('profile', {
      title: `About ${person.firstname} ${person.lastname}`,
      person,
    });
  });

// Create a server that listens on port X,000
const server = app.listen(port, () => {
    console.log(`Express running → PORT ${server.address().port}`);
  });