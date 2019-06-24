const http = require('http');

http.createServer((req, res) => {

        res.writeHead(200, { 'Content-Type': 'application/json' });

        let output = {
            nombre: 'Edgar',
            edad: 30,
            url: req.url
        }

        res.write(JSON.stringify(output));
        res.end();
    })
    .listen(8090);

console.log('Listening to port 8090');