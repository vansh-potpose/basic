const fs = require('fs').promises; // Using promises from fs module
const path = require('path');
const fs_ext = require('fs-extra');

const directoryPath = path.join(__dirname, 'ex folder');

async function addFile(sourceFile, destinationFile) {
    try {
        await fs_ext.move(sourceFile, destinationFile, { overwrite: true });
        console.log('File moved successfully:', sourceFile, 'to', destinationFile);
    } catch (err) {
        console.error('Error moving file:', err);
    }
}

async function makeFolder(folderPath) {
    try {
        let p = path.join(directoryPath, folderPath);
        await fs.mkdir(p, { recursive: true });
        console.log('Folder created successfully:', p);
    } catch (err) {
        console.error('Error creating folder:', err);
    }
}

async function readExts(directoryPath) {
    let filename = {};
    try {
        const files = await fs.readdir(directoryPath);
        files.forEach(file => {
            const ext = path.extname(file).slice(1); // Get file extension
            const folderPath = path.join(directoryPath, file);
            
            if (filename[ext]) {
                filename[ext].push(folderPath);
            } else {
                filename[ext] = [folderPath];
            }
        });
    } catch (err) {
        console.error('Unable to scan directory:', err);
    }
    return filename;
}

async function main() {
    try {
        let filename = await readExts(directoryPath);
        console.log('Filename object:', filename);

        let exts = Object.keys(filename);
        for (let i = 0; i < exts.length; i++) {
            await makeFolder(exts[i]);
            let files = filename[exts[i]];
            for (let j = 0; j < files.length; j++) {
                let sourceFile = files[j];
                let fileName = path.basename(sourceFile);
                let destinationFile = path.join(directoryPath, exts[i], fileName);
                await addFile(sourceFile, destinationFile);
            }
        }
    } catch (err) {
        console.error('Error in main function:', err);
    }
}

main();
