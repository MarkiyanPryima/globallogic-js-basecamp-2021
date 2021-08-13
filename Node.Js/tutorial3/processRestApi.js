const {CONTENT_TYPES} = require('./config');

const A = [
    {
        name: 'Bayern Munich',
        country: 'Germany 🇩🇪',
    },
    {
        name: 'Real Madrid',
        country: 'Spain 🇪🇸',
    },
    {
        name: 'Dynamo Kyiv',
        country: 'Ukraine 🇺🇦',
    },
    {
        name: 'Arsenal',
        country: 'England 🇬🇧',
    },
]
const B = [
    {
        name: 'Atletico Madrid',
        country: 'Spain 🇪🇸',
    },
    {
        name: 'Borussia Dortmund',
        country: 'Germany 🇩🇪',
    },
    {
        name: 'Shakhtar Donetsk',
        country: 'Ukraine 🇺🇦',
    },
    {
        name: 'Manchester United',
        country: 'England 🇬🇧',
    },
]
const C = [
    {
        name: 'Barcelona',
        country: 'Spain 🇪🇸',
    },
    {
        name: 'Juventus',
        country: 'Italy 🇮🇹',
    },
    {
        name: 'Chealsea',
        country: 'England 🇬🇧',
    },
    {
        name: 'P-S-G',
        country: 'France 🇫🇷',
    },
]
const D = [
    {
        name: 'Sevillia',
        country: 'Spain 🇪🇸',
    },
    {
        name: 'Inter',
        country: 'Italy 🇮🇹',
    },
    {
        name: 'Manchester City',
        country: 'England 🇬🇧',
    },
    {
        name: 'Monaco',
        country: 'France 🇫🇷',
    },
]

function processRestApi(req, res) {
    const routes = {
        '/api/A': () => {
            res.writeHead(200, {'Content-Type': CONTENT_TYPES['.json']});
            res.end(JSON.stringify(A));
        },
        '/api/B': () => {
            res.writeHead(200, {'Content-Type': CONTENT_TYPES['.json']});
            res.end(JSON.stringify(B));
        },
        '/api/C': () => {
            res.writeHead(200, {'Content-Type': CONTENT_TYPES['.json']});
            res.end(JSON.stringify(C))
        },
        '/api/D': () => {
            res.writeHead(200, {'Content-Type': CONTENT_TYPES['.json']});
            res.end(JSON.stringify(D));
        }
    }
    routes[req.url]();
};

module.exports = processRestApi;