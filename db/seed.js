const mongoose = require('./connection')
const seeds   = require('./seeds.json')

const Person = mongoose.model('Person')

mongoose.Promise = Promise

Person.remove({}).then(_ => {
  console.log('Dropped the DB')
  Person.collection.insert(seeds).then(seededEntries => {
    console.log(seededEntries)
    mongoose.connection.close()
  })
})
