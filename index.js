//declaring modules
const express = require('express')

//initializing app variable
const app = express()

app.get('/', (req, res) =>{
    res.send('Hello world!')
})

app.listen(3000)


