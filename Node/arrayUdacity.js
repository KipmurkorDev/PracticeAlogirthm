const prices = [1.23, 48.11, 90.11, 8.5, 9.99, 1.0, 1.1, 67.0];

const atoZ = Array.from({ length: 26 }, (v, i) => String.fromCharCode(97 + i));

const array1 = [5, 12, 8, 130, 44];

let index = 2;

console.log(`An index of ${index} returns ${array1.at(index)}`);
// Expected output: "An index of 2 returns 8"

index = -2;

console.log(`An index of ${index} returns ${array1.at(index)}`);
// Expected output: "An index of -2 returns 130"
