require('dotenv').config()
const express = require('express')
const app = express()

//Express settings
//app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))

//Controllers and Routes
app.use('/places', require('./controllers/places'));


//Routes
// GET /places
app.get('/', (req,res) => {
    res.render('home');
});

app.get('*', (req, res) => {
    res.render('error404');
})

app.listen(process.env.PORT);