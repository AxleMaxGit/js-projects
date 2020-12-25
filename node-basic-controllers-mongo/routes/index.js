var express = require('express');
var router = express.Router();

// Get profile data from file
const testController = require('../controllers/testController');

router.get('/test', testController.testPage);

router.get('/test/add', testController.editTest);

router.post('/test/add', testController.createTest);

// Export routes
module.exports = router;
