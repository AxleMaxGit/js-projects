const mongoose = require('mongoose');
const path = require('path');
const format = require('date-fns/format');

const Menu = mongoose.model('Menu');
const Tweet = mongoose.model('Tweet');

// Get menu items
exports.getHome = async (req, res) => {
  const menu = await Menu.find();
  const tweets = await Tweet.find();
  console.log(typeof tweets);

  for (const tweet in tweets) {
    // format the created_at date for display
    tweets[tweet]['created_at'] = format(new Date(tweets[tweet]['created_at']), 'MMM dd, yyyy');
    console.log(`${tweet}: ${tweets[tweet]}`);
  };
  res.render('home', { title: 'Home', menu, tweets });
};

exports.getTweet = async (req, res) => {
  const menu = await Menu.find();
  const tweet = await Tweet.findOne({tweet_id: req.params.tweet_id});
  const tweetdate = format(new Date(tweet.created_at), 'H:mm a • MMM dd, yyyy');
  res.render('tweet', { title: 'Tweet', menu, tweet, tweetdate });
  console.log(tweetdate);
};

exports.addTweet = async (req, res) => {
  console.log('Load Tweet Form');
  // const menu = await Menu.find();
  // const tweets = await Tweet.find();
  // res.render('home', { title: 'Homepage', menu, tweets });
  res.redirect('/');
};

exports.saveTweet = async (req, res) => {
  console.log('Tweet Saved');
  res.redirect('/');
};