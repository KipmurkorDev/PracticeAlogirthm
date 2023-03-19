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