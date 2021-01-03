var express = require('express');
var router = express.Router();

//const personController = require('../controllers/personController');
const tweetController = require('../controllers/tweetController');
const testController = require('../controllers/testController');

// RETRIEVE tweets
router.get('/', tweetController.getHome);

// RETRIEVE tweet
router.get('/tweet/:_id', tweetController.getTweet);

//CREATE - load form to create tweet
router.get('/tweet/add', tweetController.addNew);

// UPDATE - save new tweet from form to db
router.post('/tweet/add', 
  tweetController.upload, 
  tweetController.resize, 
  tweetController.saveTweet);

// //CREATE - load form to create tweet
// router.get('/test/add', testController.addTest);

// // UPDATE - save new tweet from form to db
// router.post('/test/add', testController.upload);

// Export routes
module.exports = router;