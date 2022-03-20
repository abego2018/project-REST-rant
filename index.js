//declaring modules
require('dotenv').config()

const express = require('express')

//initializing app variable
const app = express()

app.get('/', (req, res) =>{
    res.send('Hello world!')
})

//Wildcard route
app.get('*', (req, res) => {
    res.status(404).send('<h1>404 Page</h1>')
})

app.listen(process.env.PORT)


