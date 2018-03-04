const mongoose = require('mongoose')

const PersonSchema = new mongoose.Schema({
  name: String,
  birthDate: String,
  deathDate: String,
  spouse: String,
  location: String,
  occupation: String,
  // parents: String,
  // children: String,
  story: String
})

mongoose.model('Person', PersonSchema)

module.exports = mongoose