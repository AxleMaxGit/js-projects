const mongoose = require('mongoose');
const Person = mongoose.model('Person');

exports.getPeople = async (req, res) => {
    // const tests = await Test.find( { lastname: 'Freeman' } );
    const people = await Person.find();
    res.render('home', { title: 'Homepage', people: people });
};

exports.addPerson = (req, res) => {
    console.log('get page');
    res.render('editPerson', { title: 'New Person Form' });
};

exports.getPerson = async (req, res) => {
    const person = await Person.findOne({id: req.params.id});
    console.log(person);
    res.render('getPerson', { title: `${person.firstname} ${person.lastname}'s Home Page`, person: person });
};

exports.editPerson = (req, res) => {
    console.log('get page');
    res.render('editPerson', { title: 'New Person Form' });
};

exports.savePerson = async (req, res) => {
    console.log(req.body);
    const person = new Person(req.body);
    await person.save();
    console.log('db save complete');
    res.redirect('/');
};