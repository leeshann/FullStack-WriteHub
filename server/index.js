const express = require('express')
const app = express()
const cors = require('cors')
const path = require('path')
const API_endpoints = require('./routes/API_endpoints.js')

//middleware
app.use(cors())
app.use(express.json())
//allows client views like createPost to access the uploaded images using a URL
app.use('/images', express.static(path.join(__dirname, 'public', 'images')))
app.use('/', API_endpoints)


app.listen(3049, () => console.log("Server is listening on port 3049..."))