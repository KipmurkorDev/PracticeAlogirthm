//  prototype
// using create method

const person = {
  hasHead: true,
  education: "bachelor",
};

const emmanuel = Object.create(person);

// using assign for matiple in heritcanse

const timon = Object.assign({}, person);

// using object method

const myprotype = Object.getPrototypeOf(emmanuel);
const isPropert = person.hasOwnProperty(education);
let developer = {
  name: "Veronika",
  getName: function () {
    return this.name;
  },
};
developer.name = "Not Veronika";

developer.getName();
// 'Not Veronika'

developer.name;
// 'Not Veronika'
