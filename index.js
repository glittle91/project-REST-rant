// Load up modules
require('dotenv').config()
const express = require('express')
const app = express()

//Configure middlewares
app.use('/places', require('./controllers/places'))

// Routes
app.get('/', (req, res) => {
    res.send('Hello world!')
})

app.get('*', (req, res) => {
    res.status(404).send('<h1>404 Page</h1>')
})

// Listen to requests
app.listen(process.env.PORT)


