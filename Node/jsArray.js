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
