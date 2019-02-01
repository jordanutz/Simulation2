const express = require('express')
const bodyParser = require('body-parser')
const massive = require('massive')
require('dotenv').config()

const controller = require('./house_controller')
const app = express()

app.use(bodyParser.json())

massive(process.env.CONNECTION_STRING).then(db => {
  app.set('db', db)
}).catch(error => console.log('Unable to connect to database', error))

app.get('/api/listings', controller.getListings)
app.post('/api/listing', controller.createListing)

PORT = 6000;
app.listen(PORT, () => {
  console.log(`Blasting off on Port ${PORT}`)
})