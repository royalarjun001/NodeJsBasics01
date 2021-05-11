// Creating a Http Server Using the Http Module
//
// Create a web server with Node.js

const http  = require('http');
const server = http.createServer((req, res) => {
    // example to use a URL based logic
    if(req.url === '/') {
        // create response 
        res.write('Hellow world from Node JS');
        // to send the response 
        res.end();
    } else {
        res.write('Using from different server');
        res.end();
    }
});

// open a port to listen to the request
server.listen('3000');

