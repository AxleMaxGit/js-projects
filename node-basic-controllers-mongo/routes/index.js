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
