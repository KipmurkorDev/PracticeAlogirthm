// This is probably one of the less challenging challenges (no pun intended) — in terms of difficulty — but that doesn’t detract from the fact that you could come across it during a job interview. It goes like this.

const findVowels = (str) => {
  let count = 0;
  let vowels = ["a", "e", "i", "o", "u"];
  for (let i = 0; i < str.length; i++) {
    let isVowel = vowels.includes(str[i]);
    if (isVowel) {
      count++;
    }
  }
  return count;
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
/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function (arr, fn) {
  let results = [];
  for (let i = 0; i < arr.length; i++) {
    let fnOutput = fn(arr[i], i);
    if (fnOutput) {
      results.push(arr[i]);
    }
  }
  return results;
};
