const express = require('express');
const app = express();

const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

//Exress HBS engine
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

app.get('/', (req, res) => {

    res.render('home', {
        name: 'Edgar',
    });
})

app.get('/about', (req, res) => {
    res.render('about');
})


app.listen(3000, () => {
    console.log(`Listening to port ${ port }`);
});