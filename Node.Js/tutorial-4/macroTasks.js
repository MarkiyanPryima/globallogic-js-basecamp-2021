const macroTasks = () => {

    const fs = require('fs');
    const path = require('path');
    const zlib = require('zlib');
    const gzip = zlib.createGzip();

    const readFile = path.join(__dirname, 'readFile.txt');
    const writeFile = path.join(__dirname, 'writeFile.txt');
    const writeCompressedFile = path.join(__dirname, 'writeCompressedFile.txt');

    const readStream = fs.createReadStream(readFile, 'utf8');
    const writeStream = fs.createWriteStream(writeFile);
    const writeCompressedStream = fs.createWriteStream(writeCompressedFile);

    setTimeout(() => {
        readStream.pipe(writeStream).on('finish', () => console.log('Reading a file has finished'));
    }, 1000);

    readStream.pipe(writeStream).on('finish', () => console.log('Writing a file has finished'));

    setImmediate(() => {
        readStream.pipe(gzip).pipe(writeCompressedStream).on('finish', () => console.log('Compressed a file'));
        process.nextTick(() => {
            readStream.on('data', (data) => {
                console.log(`Data: ${data}`);
            });
        });
    })
}

macroTasks();

