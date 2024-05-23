const mockingbird = {
  title: "To Kill a Mockingbird",
  describe: function () {
    console.log(`${this.title} is a classic novel`);
  },
};
const pride = {
  title: "Pride and Prejudice",
};
mockingbird.describe.call(pride);
function multiply(n1, n2) {
  return n1 * n2;
}
multiply.apply(window, [3, 4]);
function Dalmatian(name) {
  this.name = name;

  this.bark = function () {
    console.log(`${this.name} barks!`);
  };
}
function Dalmatian(name) {
  this.name = name;
}

Dalmatian.prototype.bark = function () {
  console.log(`${this.name} barks!`);
};
const bear = {
  claws: true,
  diet: "carnivore",
};
function PolarBear() {
  // ...
}

PolarBear.prototype = bear;
const snowball = new PolarBear();

snowball.color = "white";
snowball.favoriteDrink = "cola";
