const mongoose = require('mongoose')

mongoose.Promise = Promise

const Person = new mongoose.Schema({
  name: String,
  location: String,
  occupation: String,
  birthDate: Date
})


module.exports = mongoose