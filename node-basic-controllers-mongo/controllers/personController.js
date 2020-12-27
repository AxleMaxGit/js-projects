const mongoose = require('mongoose');
const Person = mongoose.model('Person');

// List all the prople
exports.getPeople = async (req, res) => {
    const people = await Person.find();
    res.render('home', { title: 'Homepage', people: people });
};

//CREATE
// Load the Add Person Form
exports.addPerson = (req, res) => {
    console.log('get page');
    res.render('editPerson', { title: 'New Person Form' });
};
// Add new person record to DB
exports.createPerson = async (req, res) => {
    // console.log(req.body);
    const person = new Person(req.body);
    await person.save();
    res.redirect('/');
};

// RETRIEVE˚
// Show a single person's record
exports.getPerson = async (req, res) => {
    const person = await Person.findOne({id: req.params.id});
    res.render('getPerson', { title: `${person.firstname} ${person.lastname}'s Home Page`, person: person });
};

// UPDATE
// Retrieve an existing person's record for editing
exports.editPerson = async (req, res) => {
    const person = await Person.findOne({id: req.params.id});
    console.log('add person page');
    console.log(person);
    res.render('editPerson', { title: 'Edit Person Form', person: person });
};
// Add the updated record to the DB
exports.updatePerson = async (req, res) => {
    const person = await Person.findOneAndUpdate({id: req.params.id}, req.body, 
        {
        new: true //return the new person not the old one
        // runValidators: true
    }).exec();
    res.redirect('/');
};

//DELETE
// Delete the record for the person
exports.deletePerson = async (req, res) => {
    await Person.findOneAndDelete({id: req.params.id})
    console.log('db delete complete');
    res.redirect('/');
};