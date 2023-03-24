const obj={
    "name": "pr-metadata-action",
    "version": "1.0.0",
    "description": "Adds pull request file changes as a comment to a newly opened PR",
    "main": "index.js",
    "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1"
    },
    "repository": {
      "type": "git",
      "url": "git+https://github.com/Link-/PR-metadata-action.git"
    },
    "keywords": [],
    "author": "",
    "license": "ISC",
    "bugs": {
      "url": "https://github.com/Link-/PR-metadata-action/issues"
    },
    "homepage": "https://github.com/Link-/PR-metadata-action#readme"
  }
  const duck = {
    hasBill: true
  };
  const beaver = {
    hasTail: true
  };
  const otter = {
    hasFur: true,
    feet: 'webbed'
  };
  
  function Basketball(color) {
    return {
      color: color,
      numDots: 35000
    };
  }
  function CoffeeMaker(object) {
    let needsRefill = false;
  
    return Object.assign({}, object, {
      pourAll: function () {
        needsRefill = true;
      },
      isEmpty: function () {
        return needsRefill;
      }
    });
  }

 const newobtc= {
    style: 'percolator',
    pourAll: function () {
      needsRefill = true;
    },
    isEmpty: function () {
      return needsRefill;
    }
  }
  let developer = {
    name: 'Veronika',
    getName: function () {
      return this.name;
    }
  };
  var x = 9;
while (x >= 1) {
  console.log("hello " + x);
  x = x - 1;
}

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
  const Supabase = require('@supabase/supabase-js');
  const client = Supabase.createClient(process.env.SUPA_URL, process.env.SUPA_KEY);
  
   const getcredetialMockFuc= async(prj_id)=>{
          return await (await client.from('projects').select('*').eq('prj_id', prj_id));
  }
  
  
  
  
  module.exports={
      getcredetialMockFuc
  }
  const parrot = {
    group: 'bird',
    feathers: true,
    chirp: function () {
      console.log('Chirp chirp!');
    }
  };
  
  const pigeon = {
    group: 'bird',
    feathers: true,
    chirp: function () {
      console.log('Chirp chirp!');
    }
  };

  function shallowEqual(object1, object2) {
    const keys1 = Object.keys(object1);
    const keys2 = Object.keys(object2);
    if (keys1.length !== keys2.length) {
      return false;
    }
    for (let key of keys1) {
      if (object1[key] !== object2[key]) {
        return false;
      }
    }
    return true;
  }