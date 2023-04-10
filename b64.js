const fs = require('fs');
const path = require('path');

const dirPath = './tmp';

fs.readdir(dirPath, (err, files) => {
    if (err) throw err;

    files.forEach(file => {
    if (path.extname(file) === '.mp3') {
        const filePath = path.join(dirPath, file);

        fs.readFile(filePath, (err, data) => {
        if (err) throw err;
        
        const base64Data = data.toString('base64');

        const base64FilePath = path.join(dirPath, `${file}.txt`);
        fs.writeFile(base64FilePath, base64Data, err => {
            if (err) throw err;
            console.log(`Converted ${file} to Base64 format.`);
        });
        });
    }
    });
});