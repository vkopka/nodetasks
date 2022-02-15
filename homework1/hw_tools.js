const path = require('path');
const fs = require("fs");

// description of path settings
const mainFolder = 'main';
const onlineFolder = 'online';
const inPersonFolder = 'inPerson';

// description of file names
const onlineNameFile = 'OnlineUsers.txt';
const inPersonNameFile = 'InPersonUsers.txt';
const tempNameFile = 'Temp.txt';

// creating required paths
const onlinePath = path.join(__dirname, mainFolder, onlineFolder);
const inPersonPath = path.join(__dirname, mainFolder, inPersonFolder);
const onlineFullName = path.join(onlinePath, onlineNameFile);
const inPersonFullName = path.join(inPersonPath, inPersonNameFile);
const tempFullName = path.join(inPersonPath, tempNameFile);

const createFolder = (onPath) => {
    fs.mkdir(onPath, {recursive: true}, (err) => {
        if (err) {
            console.log(err);
            throw err;
        }
    });
};

const swapFiles = (fileFirst, fileSecond) => {
    console.log(fileFirst);
    console.log(fileSecond);
};

module.exports = {
    createFolder, swapFiles,
    onlinePath, inPersonPath,
    onlineFullName, inPersonFullName
};
