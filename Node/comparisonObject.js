// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler
function shallowEqual(object1, object2) {
  const keys1 = Object.keys(object1);
  console.log("Welcome to Programiz!", keys1);
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

const hero1 = {
  name: "Batman",
  realName: "Bruce Wayne",
};
const hero2 = {
  name: "Batman",
  realName: "Bruce Wayne",
};
const hero3 = {
  name: "Joker",
};
console.log(shallowEqual(hero1, hero2)); // => true
console.log(shallowEqual(hero1, hero3)); // => false

const helloObject = {
  name: "Alva Universal Image",
  customizations: {
    vscode: {
      extensions: ["ms-vsliveshare.vsliveshare"],
    },
  },
  features: {
    rockerdevcontainerfeaturespackages: {
      packages:
        "xvfb,libnss3-dev,libatk1.0-0,libatk-bridge2.0-0,libgtk-3-0,libgbm-dev",
    },
  },
};
