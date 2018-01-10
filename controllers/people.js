const express  = require('express')
const router   = express.Router()
const mongoose = require('../db/connection')
const Person   = mongoose.model('Person')

// copied routes from book-e-backend 
// 1 to reduce typos
// 2 because I don't have put, post and delete solidified yet

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

router.get('/', (req, res) => {
  Person.find({})
    .then((people) => {
      res.render('index', {
        people: people
      })
    })
})

router.get('/:name', (req, res) => {
  var name = req.params.name
  Person.findOne({ name: name })
  // filter based on the name attribute, as defined in models
  // use the name variable that we defined to get the one record
  // we want
  .then(person => {
    res.render('person', { person: person })
  })
})

router.post('/', (req, res) => {
  Person.create(req.body.person)
    .then(person => {
      res.redirect(`/people/${person.name}`)
    })
})

router.put('/:name', (req, res) => {
  Person.findOneAndUpdate({ name: req.params.name }, req.body.person, { new: true })
  .then(person => {
    res.redirect(`/people/${person.name}`)
  })
})

router.delete('/:name', (req, res) => {
  Person.findOneAndRemove({ name: req.params.name })
  .then(person => {
    res.redirect('/people')
  })
})


module.exports = router