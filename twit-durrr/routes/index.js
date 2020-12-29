var express = require('express');
var router = express.Router();

const tweetController = require('../controllers/tweetController');

// List all the people
router.get('/', personController.getHome);

//CREATE
// Load the Add Tweet Form
router.get('/tweet/add', tweetController.addTweet);

// Export routes
module.exports = router;




// // Add new person record to DB
// router.post('/person/add', personController.createPerson);

// // RETRIEVE
// // Show a single person's record
// router.get('/person/:id', personController.getPerson);

// // UPDATE
// // Retrieve an existing person's record for editing
// router.get('/person/edit/:id', personController.editPerson);
// // Add the updated record to the DB
// router.post('/person/add/:id', personController.updatePerson);

// //DELETE
// // Delete the record for the person
// router.get('/person/delete/:id', personController.deletePerson);


// // Export routes
// module.exports = router;
