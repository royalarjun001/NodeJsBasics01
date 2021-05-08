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
})

// file end
