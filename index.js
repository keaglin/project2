const express = require('express')
const pug     = require('pug')
const app     = express()

app.set('port', process.env.PORT || 3001)

app.set('view engine', 'pug')

app.use('/assets', express.static('public'))

app.get('/', (req, res) => {
  res.render('index')
})

app.listen(app.get('port'), () => {
  console.log('It\'s aliiive! on PORT', app.get('port'))
})