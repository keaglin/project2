const mongoose = require('mongoose')

const PersonSchema = new mongoose.Schema({
  name: String,
  location: String,
  occupation: String,
  birthDate: Date
})

mongoose.model('People', PersonSchema)

module.exports = mongoose