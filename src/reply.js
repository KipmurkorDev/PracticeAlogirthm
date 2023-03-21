var x = 9;
while (x >= 1) {
  console.log("hello " + x);
  x = x - 1;
}
let solution = 1;

for (let i = 1; i <= 12; i++) {
  solution *= i;
}

console.log(solution);
function calc() {
  var extra = 5;
  var sum = function(a,b) {
    return a + b;
  }
  let total = extra + sum(2,3);
}
console.log(extra); // is extra accessible here?
calc();
console.log(total); // is total accessible here?