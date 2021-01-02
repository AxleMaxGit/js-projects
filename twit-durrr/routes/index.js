var express = require('express');
var router = express.Router();

//const personController = require('../controllers/personController');
const tweetController = require('../controllers/tweetController');

// RETRIEVE tweets
router.get('/', tweetController.getHome);

// RETRIEVE tweet
router.get('/tweet/:_id', tweetController.getTweet);

//CREATE - load form to create tweet
router.get('/tweet/add', tweetController.addNew);

// UPDATE - save new tweet from form to db
router.post('/tweet/add', 
  tweetController.upload,
  // tweetController.resize,
  tweetController.saveTweet);

// Export routes
module.exports = router;