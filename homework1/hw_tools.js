const path = require('path');
const fs = require("fs");
const {usersOnline} = require("./dataStorage");

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

const usersWriteToFile = (users, fileFullName) => {
    let textBlock = '';
    fs.writeFile(fileFullName, textBlock, (err) => {
        if (err) {
            console.log(err);
            throw err;
        }
    });
    users.map(user => {
        textBlock = '';
        for (const userKey in user) {
            textBlock += `${userKey} : ${user[userKey]} \n`;
        }
        textBlock += `\n`;

        fs.appendFile(fileFullName, textBlock, (err) => {
            if (err) {
                console.log(err);
                throw err;
            }
        });
    });
};

const swapFiles = (fileFirst, fileSecond) => {
    console.log(fileFirst);
    console.log(fileSecond);
};

module.exports = {
    createFolder, swapFiles, usersWriteToFile,
    onlinePath, inPersonPath,
    onlineFullName, inPersonFullName
};
