// Homework N 1
// Modules (import & export), Node.js modules "Path", "Os", "fs"
const os = require('os');

const {usersOnline, usersInPerson} = require('./dataStorage');
const {
    createFolder, swapFiles, usersWriteToFile,
    onlinePath, inPersonPath,
    onlineFullName, inPersonFullName
} = require('./hw_tools');

console.log('I working on platform', os.platform(), os.type(), os.release());

createFolder(onlinePath);
// console.log('Folder available:', onlinePath);

createFolder(inPersonPath);
// console.log('Folder available:', inPersonPath);

usersWriteToFile(usersOnline, onlineFullName);
usersWriteToFile(usersInPerson, inPersonFullName);

swapFiles(onlineFullName, inPersonFullName);
