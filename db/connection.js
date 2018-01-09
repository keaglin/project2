const mongoose = require('./models/people')

const mongoUri = 'mongodb://localhost/johnsons'

mongoose
  .connect()
  .then()
  .catch(err => console.log('Connection failed!', err))