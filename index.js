const express          = require('express')
// const pug              = require('pug')
const hbs              = require('express-handlebars')
const PeopleController = require('./controllers/people')
const parser           = require('body-parser')
const methodOverride   = require('method-override')
const app              = express()

app.set('port', process.env.PORT || 3001)

// app.set('view engine', 'pug')
app.set('view engine', 'hbs')
app.engine('.hbs', hbs({
  extname:        '.hbs',
  partialsDir:    'views/',
  layoutsDir:     'views/',
  defaultLayout:  'layout'
}))

app.use('/assets', express.static('public'))

// app.get('/', (req, res) => {
//   res.render('index')
// })
app.use(methodOverride('_method'))
app.use(parser.urlencoded({ extended: true }))
app.get('/', (req, res) => {
  res.redirect('/people')
})
app.use('/people', PeopleController)

app.listen(app.get('port'), () => {
  console.log('It\'s aliiive! on PORT', app.get('port'))
})