const donuts = [
  "glazed",
  "chocolate frosted",
  "Boston creme",
  "glazed cruller",
  "cinnamon sugar",
  "sprinkled",
  "powdered",
];

donuts.pop();
donuts.pop();
donuts.pop();
// return "cinnamon sugar";
const donuts2 = [
  "glazed",
  "chocolate frosted",
  "Boston creme",
  "glazed cruller",
];
donuts2.splice(1, 1, "chocolate cruller", "creme de leche");
const team1 = [
  "Oliver Wood",
  "Angelina Johnson",
  "Katie Bell",
  "Alicia Spinnet",
  "George Weasley",
  "Fred Weasley",
  "Harry Potter",
];
const team2 = ["George Weasley", "Fred Weasley", "Harry Potter"];
const team3 = [];
const team4 = [
  "Oliver Wood",
  "Angelina Johnson",
  "Katie Bell",
  "Alicia Spinnet",
  "George Weasley",
  "Fred Weasley",
  "Harry Potter",
  "Hermione Granger",
  "Ron Weasley",
  "Neville Longbottom",
];
const myArray = [1, 2, 3, 4, 5];

for (let i = 0; i < myArray.length; i = i + 2) {
  console.log(myArray[i]);
  if (i === 2) {
    break;
  }
}
const newArray = myArray.map(function (elem) {
  elem = elem + 100;
  return elem;
});

console.log(newArray); //[101, 102, 103, 104, 105]
const donuts4 = ["jelly donut", "chocolate donut", "glazed donut"];

const improvedDonuts = donuts.map(function (donut) {
  donut += " hole";
  donut = donut.toUpperCase();
  return donut;
});

for (let r = 0; r < grid.length; r++) {
  for (let c = 0; c < grid[r].length; c++) {
    console.log(grid[r][c]);
  }
}
const donutBox = [
  ["glazed", "chocolate glazed", "cinnamon"],
  ["powdered", "sprinkled", "glazed cruller"],
  ["chocolate cruller", "Boston creme", "creme de leche"],
];

// here, donutBox.length refers to the number of rows of donuts
for (let row = 0; row < donutBox.length; row++) {
  console.log(donutBox[row]);
}
