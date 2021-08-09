const http = require('http');
const port = '3000';
const hostname = '127.0.0.1';

const logger = require('./logger');
const mercedes = require('./mercedes');
const tesla = require('./tesla');
const file = require('./file')

const server = http.createServer((req, res) => {
    res.statusCode = 200;

    file.readFile();
    file.writeFile();

    const result = logger(req.url, mercedes, tesla);

    console.log(result);
    res.end(result);
})

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
})

