const mongoose = require('mongoose');
const Person = mongoose.model('Person');

exports.homePage = async (req, res) => {
    // const tests = await Test.find( { lastname: 'Freeman' } );
    const people = await Person.find();
    res.render('home', { title: 'Homepage', people: people });
};

// exports.testPage = (req, res) => {
//     res.render('test', { title: 'Homepage' });
// };

exports.editPerson = (req, res) => {
    console.log('get page');
    res.render('editPerson', { title: 'New Person Form' });
};

exports.createPerson = async (req, res) => {
    console.log(req.body);
    const person = new Person(req.body);
    await person.save();
    console.log('db save complete');
    res.render('editPerson', { title: 'New Person Form' });
};