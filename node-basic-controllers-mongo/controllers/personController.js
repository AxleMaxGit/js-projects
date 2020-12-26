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

exports.createPerson = async (req, res) => {
    console.log(req.body);
    const person = new Person(req.body);
    await person.save();
    console.log('db save complete');
    res.redirect('/');
};

exports.getPerson = async (req, res) => {
    const person = await Person.findOne({id: req.params.id});
    res.render('getPerson', { title: `${person.firstname} ${person.lastname}'s Home Page`, person: person });
};

exports.editPerson = async (req, res) => {
    const person = await Person.findOne({id: req.params.id});
    console.log('add person page');
    console.log(person);
    res.render('editPerson', { title: 'Edit Person Form', person: person });
};

exports.updatePerson = async (req, res) => {
    const person = await Person.findOneAndUpdate({id: req.params.id}, req.body, 
        {
        new: true //return the new person not the old one
        // runValidators: true
    }).exec();

    console.log('db save complete');
    res.redirect('/');
};

exports.deletePerson = async (req, res) => {
    await Person.findOneAndDelete({id: req.params.id})
    console.log('db delete complete');
    res.redirect('/');
};