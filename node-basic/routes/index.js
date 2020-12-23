var express = require('express');
var router = express.Router();
const people = require('../people.json');

// Render views
router.get('/', (req, res) => {
    // res.send(HTML);
    res.render('index', {
        title: 'Homepage',
        people: people.profiles
    })
  });

router.get('/profile', (req, res) => {
    const person = people.profiles.find(p => p.id === req.query.id);
    res.render('profile', {
      title: `About ${person.firstname} ${person.lastname}`,
      person,
    });
});

module.exports = router;