const express = require('express');
const register = require('@react-ssr/express/register');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json({type: '*/*'}));

let catsData = require('./data/catsData');
let dogsData = require('./data/dogsData');
let birdsData = require('./data/birdsData');
const pages = ['dogs', 'cats', 'birds'];

(async () => {
    await register(app);

    app.get('/', (req, res) => {
        res.render('index', {pages});
    });

    app.get('/cats', (req, res) => {
        res.render('cats/cats', {items: catsData})
    });

    app.get('/dogs', (req, res) => {
        res.render('dogs/dogs', {items: dogsData})
    });

    app.get('/birds', (req, res) => {
        res.render('birds/birds', {items: birdsData})
    });

    app.get('/api/cats/:id', (req, res) => {
        const selectedCat = catsData.find(cat => cat.id == req.params.id);
        res.json(selectedCat);
    });

    app.get('/api/dogs/:id', (req, res) => {
        const selectedDog = catsData.find(dog => dog.id == req.params.id);
        res.json(selectedDog);
    });

    app.get('/api/birds/:id', (req, res) => {
        const selectedBird = catsData.find(bird => bird.id == req.params.id);
        res.json(selectedBird);
    });

    app.get('*',(req, res) => {
        res.render('notFound/notFound');
    });

    app.listen(3000, () => {
        console.log('Server running on http://localhost:3000');
    });

})();
