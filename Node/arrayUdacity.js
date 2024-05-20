const prices = [1.23, 48.11, 90.11, 8.5, 9.99, 1.0, 1.1, 67.0];

const atoZ = Array.from({ length: 26 }, (v, i) => String.fromCharCode(97 + i));

const array1 = [5, 12, 8, 130, 44];

let index = 2;

console.log(`An index of ${index} returns ${array1.at(index)}`);
// Expected output: "An index of 2 returns 8"

index = -2;

console.log(`An index of ${index} returns ${array1.at(index)}`);
// Expected output: "An index of -2 returns 130"
const array2 = ["a", "b", "c", "d", "e"];

// Copy to index 0 the element at index 3
console.log(array2.copyWithin(0, 3, 4));
// Expected output: Array ["d", "b", "c", "d", "e"]

// Copy to index 1 all elements from index 3 to the end
console.log(array1.copyWithin(1, 3));
// Expected output: Array ["d", "d", "e", "d", "e"]
