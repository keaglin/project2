const express  = require('express')
const router   = express.Router()
const mongoose = require('../db/connection')
const Person   = mongoose.model('Person')

router.get('/', (req, res) => {
  res.render('index')
})
router.post('/', (req, res) => {

})
router.put('/', (req, res) => {

})
router.delete('/', (req, res) => {

})

// function getPeople() {
//   (req, res) => {
//     res.send('hello world')
//   }
// }
// function addPerson() {}
// function editPerson() {}
// function removePerson() {}

// router.get('/', getPeople)
// router.post('/', addPerson)
// router.put('/', editPerson)
// router.delete('/', removePerson)


module.exports = router