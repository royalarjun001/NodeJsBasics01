// This is a sample practice file for the readable and writable
// stream in node js

const fs = require('fs');

// Read and Write Stream Example.
const readStream = 
    fs.createReadStream('./streamExample.txt', 'utf8');
const writeSteam = 
    fs.createWriteStream('streamExample2.txt');

readStream.on('data', chunk => {
    // This chuck is not the complete file data
    // it is various part, hence could be used as
    // it is received and hence no need to wait for 
    // whole data to be readed first.
    console.log(chunk);
});

// wite data to new file named 'streamExample2.txt'
readStream.on('data', chunk => {
    writeSteam.write(chunk);
});

// Addition Information:
// To read large file we should not be using readFile method available in node
// Why: because readFile method use Buffer to read file and suppose we have file 
//      size more then 2 GB then we need Buffer to be at least 2GB to read the file
//      and that is less efficient and hence we should use stream methods to read 
//      the data from the files.
//
// Stream also uses a buffer but not a full buffer it uses a very very small buffer
// We are reading the data in chucks and not attempting to read whole file in once 
// hence it could read 2GB files And it could be memory efficient at the same time.

// file end
