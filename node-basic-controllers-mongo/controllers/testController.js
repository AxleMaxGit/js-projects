const mongoose = require('mongoose');
const Test = mongoose.model('Test');

exports.homePage = async (req, res) => {
    // const tests = await Test.find( { lastname: 'Freeman' } );
    const tests = await Test.find();
    res.render('index', { title: 'Homepage', tests: tests });
};

exports.testPage = (req, res) => {
    res.render('test', { title: 'Homepage' });
};

exports.editTest = (req, res) => {
    console.log('get page');
    res.render('editTest', { title: 'New Test Form' });
};

exports.createTest = async (req, res) => {
    console.log(req.body);
    const test = new Test(req.body);
    await test.save();
    console.log('db save complete');
    res.render('editTest', { title: 'New Test Form' });
};
