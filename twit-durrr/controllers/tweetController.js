const mongoose = require('mongoose');
// const path = require('path');

// Multi-part form handler library
const multer = require('multer');
// Image management [resize] library
const jimp = require('jimp');
// Library for creating unique identifiers
const uuid = require('uuid');

// data formatting and handling library
const format = require('date-fns/format');
const formatISO = require('date-fns/formatISO');


// Compile models from schema
const Menu = mongoose.model('Menu');
const Tweet = mongoose.model('Tweet');

// ##### ROUTES  #####  //

// [router.get('/', tweetController.getHome)]
exports.getHome = async (req, res) => {
  console.log('get /');
  // Get menu items
  const menu = await Menu.find();
  // Retrieve tweets [sort by -1 gets reverse order for the key _id]
  const tweets = await Tweet.find().sort({_id:-1});;

  // format the created_at date for display
  for (const tweet in tweets) {
    tweets[tweet]['created_at'] = format(new Date(tweets[tweet]['created_at']), 'MMM dd, yyyy');
  };
  // Render page
  res.render('home', { title: 'Home', menu, tweets });
};

// [router.get('/tweet/:tweet_id', tweetController.getTweet);]]
exports.getTweet = async (req, res) => {
  console.log('get /tweet/:_id');
  const menu = await Menu.find();
  const tweet = await Tweet.findOne({_id: req.params._id});
  const tweetdate = format(new Date(tweet.created_at), 'H:mm a • MMM dd, yyyy');
  res.render('tweet', { title: 'Tweet', menu, tweet, tweetdate });
  //console.log(tweetdate);
};

// [router.get('/tweet/add', tweetController.addNew);]
exports.addNew = async (req, res) => {
  console.log('##MODAL## get: /tweet/add');
  res.redirect('/');
};

const multerOptions = {
  // read the file into memory
  storage: multer.memoryStorage(),
  // check it is a suitable filetype
  fileFilter(req, file, next) {
    const isPhoto = file.mimetype.startsWith('image/');
    console.log(isPhoto);
    if(isPhoto) {
      next(null, true);
    } else {
      next({ message: 'That filetype isnt allowed!'}, false);
    }
  }
};

// Middleware to handle image file upload in tweeet
exports.upload = multer(multerOptions).single('photo');

//Middleware to resize images
exports.resize = async (req, res, next) => {
  // if there is no file to resize
  if( !req.file) {
    next(); //move on
    console.log('no file selected');
    return;
  } 
  // console.log(req.file);
  console.log(req.body);
  const extension = req.file.mimetype.split('/')[1];
  req.body.photo = `${uuid.v4()}.${extension}`;
  const photo = await jimp.read(req.file.buffer);
  await photo.resize(300, jimp.AUTO);
  await photo.write(`./public/uploads/${req.body.photo}`);
  next();
}

// [router.post('/tweet/add', tweetController.saveTweet);]
exports.saveTweet = (req, res) => {
  // contains tweet_text & username
  const tweetbody = req.body;
  // add user avatar
  tweetbody.user_profile_img = '/images/twit_user/alex_400x400.jpg';

  // add DTG to tweet
  tweetbody.created_at = formatISO(new Date());

  tweetbody.tweet_img = `/uploads/${req.body.photo}`;
  console.log(tweetbody);
  Tweet.insertMany(tweetbody);
  res.redirect('/');
};