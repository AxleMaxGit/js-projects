var express = require('express');
var router = express.Router();

// Get profile data from file
const peopleController = require('../controllers/peopleController');

// Routes
router.get('/', peopleController.homePage);
router.get('/profile/', peopleController.getProfile);

// Export routes
module.exports = router;