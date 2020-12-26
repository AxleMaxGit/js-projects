var express = require('express');
var router = express.Router();

// Get profile data from file
// const testController = require('../controllers/testController');

// router.get('/', testController.homePage);

// router.get('/test', testController.testPage);

// router.get('/test/add', testController.editTest);

// router.post('/test/add', testController.createTest);

const personController = require('../controllers/personController');

router.get('/', personController.homePage);

router.get('/person/add', personController.editPerson);

router.post('/person/add', personController.createPerson);

// Export routes
module.exports = router;
