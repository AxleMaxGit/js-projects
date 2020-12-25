const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const testSchema = new mongoose.Schema({
    firstname : { type: String },
    lastname : { type: String },
    bio : { type: String },
    tagline : { type: String },
    id : { type: String }
});

module.exports = mongoose.model('Test', testSchema);