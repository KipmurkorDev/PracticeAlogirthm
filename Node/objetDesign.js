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
