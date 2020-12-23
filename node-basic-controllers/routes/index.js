var express = require('express');
var router = express.Router();

// Get profile data from file
const peopleController = require('../controllers/peopleController');

// Routes
router.get('/', peopleController.homePage);
router.get('/profile', peopleController.getProfileParam);
router.get('/profile/:id', peopleController.getProfileSubdomain);

// Export routes
module.exports = router;

// What routes looked like inline w/o controller
// router.get('/profile', (req, res) => {
//     const person = people.profiles.find(p => p.id === req.query.id);
//     res.render('profile', {
//       title: `About ${person.firstname} ${person.lastname}`,
//       person,
//     });
//   });