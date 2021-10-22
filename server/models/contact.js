/*
File Name: server/models/contact.js
Student's Name: Gaeun Kim
StudentID: 301157178
Date: 2021.10.21
*/

let mongoose = require('mongoose');

// create a model class
let contactModel = mongoose.Schema({
    name: String,
    number: String,
    email: String
},
{
    collection: "contacts"
})


module.exports = mongoose.model('Contact', contactModel);