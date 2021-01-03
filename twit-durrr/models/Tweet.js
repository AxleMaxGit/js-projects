const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const tweetSchema = new mongoose.Schema({
    tweet_text : { type: String },
    username : { type: String },
    user_profile_img : { type: String },
    tweet_img : { type: String },
    created_at : { type: String}
});

module.exports = mongoose.model('Tweet', tweetSchema);