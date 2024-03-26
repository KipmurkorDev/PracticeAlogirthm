module.exports = function (handler) {
  return async (req, res, next) => {
    try {
      await handler(req, res);
    } catch (ex) {
      next(ex);
    }
  };
};
// A palindrome is a word, phrase, or other type of string that can be read backwards or upside down. For example, “racecar” and “Anna” are palindromes. “Tisch” and “Juan” are not palindromes because they do not read the same from left to right and from right to left.
const palindrome = (str) => {
  str = str.toLowerCase();
  let strReverse = str.split("").reverse().join("");
  if (strReverse === str) {
    return true;
  }
  return false;
};
function divisibleSumPairs(n, k, ar) {
  // Write your code here
  let count = 0;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      let sum = ar[i] + ar[j];
      if (sum % k === 0) {
        count++;
      }
    }
  }
  return count;
}
let myArray = [1, 2, 3, 4, 5];
let person = {
  name: "John",
  age: 30,
  city: "New York",
};
