const express = require('express')
const morgan = require('morgan')
const path = require('path')
const { engine } = require('express-handlebars')

const app = express()
const port = 3000

app.use(express.static(path.join(__dirname, 'public')))

// HTTP logger
app.use(morgan('combined'))

// Express handlebars
app.engine('hbs', engine({extname: '.hbs'}))
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resources/views'));

app.get('/', (req, res) => {
  res.render('home')
})

app.get('/user', (req, res) => {
  res.render('user')
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})