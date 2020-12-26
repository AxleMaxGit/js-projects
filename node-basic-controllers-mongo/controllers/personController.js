const mongoose = require('mongoose');
const Test = mongoose.model('Person');

exports.homePage = async (req, res) => {
    // const tests = await Test.find( { lastname: 'Freeman' } );
    const people = await Person.find();
    res.render('index', { title: 'Homepage', people: people });
};

exports.testPage = (req, res) => {
    res.render('test', { title: 'Homepage' });
};

exports.editTest = (req, res) => {
    console.log('get page');
    res.render('editTest', { title: 'New Person Form' });
};

exports.createTest = async (req, res) => {
    console.log(req.body);
    const person = new Person(req.body);
    await person.save();
    console.log('db save complete');
    res.render('editTest', { title: 'New Person Form' });
};