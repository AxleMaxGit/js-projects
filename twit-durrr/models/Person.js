const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const personSchema = new mongoose.Schema({
    firstname : { 
        type: String,
        trim: true, 
        required: 'Please enter a first name'
    },
    lastname : { type: String },
    bio : { type: String },
    tagline : { type: String },
    id : { 
        type: String,
        trim: true, 
        required: 'Please enter an id'
    },
});

module.exports = mongoose.model('Person', personSchema);

