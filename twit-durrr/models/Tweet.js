const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const tweetSchema = new mongoose.Schema({
    username : { type: String },
    text : { type: String },
    img : { type: String },
    tweet_id : { type: Number },
    created_at : { type: String}
});

module.exports = mongoose.model('Tweet', tweetSchema);