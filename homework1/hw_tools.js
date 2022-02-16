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
    fs.mkdirSync(onPath, {recursive: true});
};

const usersWriteToFile = (users, fileFullName) => {
    let textBlock = '';
    fs.writeFileSync(fileFullName, textBlock);
    users.map(user => {
        textBlock = '';
        for (const userKey in user) {
            textBlock += `${userKey} : ${user[userKey]} \n`;
        }
        textBlock += `\n`;
        // console.log(textBlock);

        fs.appendFileSync(fileFullName, textBlock);
    });
};

const swapFiles = (fileFirst, fileSecond) => {
    fs.renameSync(fileFirst, tempFullName);
    fs.renameSync(fileSecond, fileFirst);
    fs.renameSync(tempFullName, fileSecond);
};

module.exports = {
    createFolder, swapFiles, usersWriteToFile,
    onlinePath, inPersonPath,
    onlineFullName, inPersonFullName
};
