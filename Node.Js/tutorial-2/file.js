const fs = require('fs');
const path = require('path');

function readFile() {
    const file1 = path.join(__dirname, 'file1.txt');
    const file2 = path.join(__dirname, 'file2.txt');

    fs.readFile(file1, 'utf8', (error, data) => {
        if (error) {
            return console.error(error);
        }
        console.log(data);
    })

    fs.readFile(file2, 'utf8', (error, data) => {
        if (error) {
            return console.error(error);
        }
        console.log(data);
    })
}

function writeFile() {
    fs.writeFile('file3.txt', 'Hello, from the writeFile function', (error) => {
        if (error) return console.error("Can't write the file");
    })
}


module.exports = {writeFile, readFile};
