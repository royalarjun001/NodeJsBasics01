// Node tutorial
// Pipe and Pipe Chaining

// instead of listing to normal event on read stream and 
// transfering it to write stream we can use "pipe" to make 
// every thing simpler.
//
// What pipe do
// Pipe take data from one stream to other 
// in our case it will take the data from the readstream
// and then send it write stream
// here we need two stream 
//
// Pipe Chaining
// For Chaining of pipe we need another module which is zlib
// for compression and then we need to create transform stream:
// It get the data and manipulate to something else in our case
// it will compress the data.

const fs = require('fs');
const zlib = require('zlib');
const gzip = zlib.createGzip();
const readStream = fs.createReadStream('streamExample.txt');
const writeStream = fs.createWriteStream('streamExample3.txt.gz');
readStream.pipe(gzip).pipe(writeStream);

// - end -
