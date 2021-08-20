const http = require('http');

const port = '3000';
const hostname = '127.0.0.1';

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    if (req.url === '/html') {
        res.setHeader('Content-Type', 'text/html');
        res.end(`
            <html>
               <head>
               <title>Server</title>
               </head>
               <body>
               <h1>Hello world!</h1>
               </body>
            </html>
        `);
    } else if (req.url === '/json') {
        res.setHeader('Content-Type', 'text/json');
        res.end(JSON.stringify({greeting: 'Hello world!'}));
    } else {
        res.setHeader('Content-Type', 'text/plain');
        res.end('Hello World!');
    }

})

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
})

