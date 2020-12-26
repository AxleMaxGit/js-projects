var express = require('express');
var router = express.Router();

// Get profile data from file
// const testController = require('../controllers/testController');

// router.get('/', testController.homePage);

// router.get('/test', testController.testPage);

// router.get('/test/add', testController.editTest);

// router.post('/test/add', testController.createTest);

const personController = require('../controllers/personController');

router.get('/', personController.getPeople);

router.get('/people/', personController.getPeople);

router.get('/person/add', personController.addPerson);

router.post('/person/add', personController.savePerson);

router.get('/person/:id', personController.getPerson);

router.get('/person/edit/:id', personController.editPerson);

// Export routes
module.exports = router;
