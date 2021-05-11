// Creating a Http Server Using the Http Module
//
// Create a web server with Node.js

const http  = require('http');
const server = http.createServer((req, res) => {
    // create response 
    res.write('Hellow world from Node JS');
    // to send the response 
    res.end();
});

// open a port to listen to the request
server.listen('3000');

