const express  = require('express')
const router   = express.Router()
const mongoose = require('../db/connection')
const Person   = mongoose.model('Person')

router.get('/', (req, res) => {
  Person.find({})
    .then(people => {
      res.json({people: people})
    })
    .catch(err => console.log('Woops!', err))
})

router.get('/:name', (req, res) => {
  var name = req.params.name
  Person.findOne({ name: name })
  // filter based on the name attribute, as defined in models
  // use the name variable that we defined to get the one record
  // we want
  .then(person => {
    res.json(person)
  })
  .catch(err => console.log('Woops!', err))
})

router.post('/', (req, res) => {
  Person.create(req.body.person)
    .then(person => {
      res.json(person)
    })
    .catch(err => console.log('Woops!', err))
})

router.put('/:name', (req, res) => {
  Person.findOneAndUpdate({ name: req.params.name }, req.body.person, { new: true })
  .then(person => {
    res.json(person)
  })
  .catch(err => console.log('Woops!', err))
})

router.delete('/:name', (req, res) => {
  Person.findOneAndRemove({ name: req.params.name })
  .then(person => {
    res.json(person)
  })
  .catch(err => console.log('Woops!', err))
})


module.exports = router