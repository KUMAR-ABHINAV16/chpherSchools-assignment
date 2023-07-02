let fs = require('fs')

let readFile = fs.readFileSync('readMe.txt');
console.log(readFile)
console.log('synchronous read')