function Bird(name, color) {
    this.name = name;
    this.color = color;
    this.numLegs = 2;
  }
  let swan = new Bird();
swan.name = "Carlos";
swan.color = "white";


let ownProps = [];

for (let property in duck) {
  if(duck.hasOwnProperty(property)) {
    ownProps.push(property);
  }
}

console.log(ownProps);