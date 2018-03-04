const express          = require('express')
const PeopleController = require('./controllers/people')
const parser           = require('body-parser')
const methodOverride   = require('method-override')
const app              = express()
const cors             = require('cors')

app.set('port', process.env.PORT || 3001)
app.use(cors())

app.use(methodOverride('_method'))
app.use(parser.urlencoded({ extended: true }))
app.get('/', (req, res) => {
  res.send('hello world')
})
app.use('/people', PeopleController)

app.listen(app.get('port'), () => {
  console.log('It\'s aliiive! on PORT', app.get('port'))
})