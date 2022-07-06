const mongoose = require('mongoose')
const Person = mongoose.model('Person', {
    name:String,
    password:String
})

module.exports = Person