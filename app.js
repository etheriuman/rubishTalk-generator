// join in dependencies
const express = require('express')
const exphbs = require('express-handlebars')
const handlebars = require('handlebars')
const bodyParser = require('body-parser')
const generateRubbishTalk = require('./rubbishTalk_generator')

const app = express()

// define port number
const port = 3000

// set bodyParser working on all routes and set static file
app.use(bodyParser.urlencoded({extended: true}),express.static('public'))

// set template engine
app.engine('handlebars', exphbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

// register helper
handlebars.registerHelper('ifEqual', function (job, targetJob, options) {
  if (job === targetJob) {
    return options.fn(this)
  }
  return options.inverse(this)
})

// index page GET requesting
app.get('/', (req, res) => {
  res.render('index')
})

// index page POST requesting
app.post('/', (req, res) => {
  const job = req.body.options
  const rubbishTalk = generateRubbishTalk(job)
  res.render('index', {rubbishTalk, job})
})


// activate server
app.listen(port, () => {
  console.log(`the server is running on http://localhost:${port}`)
})