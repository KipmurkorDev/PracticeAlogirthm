
const path = require('path')

console.log(path.resolve('ayyay.js')); // '/Users/joe/joe.txt' if run from my home folder

// path join, resolve and normalized()


const fs = require('fs');
const isFile = fileName => {
    return fs.lstatSync(fileName).isFile();
  };
  
const folderPath = '/Users/kipmurkoremmanuel/Desktop'

const folderPaths=fs.readdirSync(folderPath).map(fileName => {
    return path.join(folderPath, fileName);
  }).filter(isFile)

//  remove folder
const fs = require('fs');

fs.rmdir(dir, err => {
  if (err) {
    throw err;
  }

  console.log(`${dir} is deleted!`);
});

  

  console.log(folderPaths);