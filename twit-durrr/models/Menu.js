const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const menuSchema = new mongoose.Schema({
    name : { type: String },
    img : { type: String },
    id : { type: String }
});

module.exports = mongoose.model('Menu', menuSchema);