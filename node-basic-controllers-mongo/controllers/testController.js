const mongoose = require('mongoose');
const Test = mongoose.model('Test');

exports.testPage = (req, res) => {
    res.render('test', { title: 'Homepage' });
};

exports.editTest = (req, res) => {
    console.log('get page');
    res.render('editTest', { title: 'New Test Form' });
};

exports.createTest = (req, res) => {
    console.log('post page');
    const test = new Test(req.body);
    test.save();
};
