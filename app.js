// join in dependencies
const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const generateRubbishTalk = require('./rubbishTalk_generator')

const app = express()

// define port number
const port = 3000

// set template engine
app.engine('handlebars', exphbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

// set bodyParser working on all routes and set static file
app.use(bodyParser.urlencoded({extended: true}),express.static('public'))


// index page GET requesting
app.get('/', (req, res) => {
  res.render('index')
})

// index page POST requesting
app.post('/', (req, res) => {
  const job = req.body.options
  const rubbishPackage = generateRubbishTalk(job)
  res.render('index', {rubbishPackage})
})


// activate server
app.listen(port, () => {
  console.log(`the server is running on http://localhost:${port}`)
})