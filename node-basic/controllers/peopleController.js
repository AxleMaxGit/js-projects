const people = require('../people.json');

exports.homePage = (req, res) => {
    res.render('index', {
        title: 'Homepage',
        people: people.profiles
    })
};

exports.getProfile = (req, res) => {
    const person = people.profiles.find(p => p.id === req.query.id);
    res.render('profile', {
        title: 'Profile',
        person,
    })
};

// router.get('/profile', (req, res) => {
//     const person = people.profiles.find(p => p.id === req.query.id);
//     res.render('profile', {
//       title: `About ${person.firstname} ${person.lastname}`,
//       person,
//     });
//   });