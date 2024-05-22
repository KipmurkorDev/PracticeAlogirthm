let instructor = new SoftwareDeveloper("Andrew");

console.log(instructor);
function SoftwareDeveloper(name) {
  this.favoriteLanguage = "JavaScript";
  this.name = name;
}
function Finch(name) {
  this.kingdom = "Animalia";
  this.name = name;
}

function Sparrow(name) {
  this.kingdom = "Animalia";
  this.name = name;
}
const building = {
  floors: 5,
  addFloor: function () {
    this.floors += 1;
  },
};

building.addFloor();
