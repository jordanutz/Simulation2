const express = require('express')
const bodyParser = require('body-parser')
const massive = require('massive')
require('dotenv').config()

const controller = require('./house_controller')
const app = express()

app.use(bodyParser.json())
app.use( express.static( `${__dirname}/../build` ) )

massive(process.env.CONNECTION_STRING).then(db => {
  app.set('db', db)
}).catch(error => console.log('Unable to connect to database', error))

app.get('/api/listings', controller.getListings)
app.post('/api/listing', controller.createListing)
app.delete('/api/listings/:id', controller.deleteListing)

PORT = 6000;
app.listen(PORT, () => {
  console.log(`Blasting off on Port ${PORT}`)
})
