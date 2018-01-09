const mongoose = require('mongoose')

const PersonSchema = new mongoose.Schema({
  name: String,
  location: String,
  occupation: String,
  birthDate: String
})

module.exports = mongoose