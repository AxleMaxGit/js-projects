var express = require('express');
var router = express.Router();

const personController = require('../controllers/personController');
const tweetController = require('../controllers/tweetController');

//CREATE
router.get('/tweet/add', tweetController.addNew);

// RETRIEVE tweets
router.get('/', tweetController.getHome);

// RETRIEVE tweet
router.get('/tweet/:_id', tweetController.getTweet);

// CREATE new tweet
router.post('/tweet/add', tweetController.saveTweet);

// Export routes
module.exports = router;