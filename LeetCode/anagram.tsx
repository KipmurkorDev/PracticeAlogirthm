// Given two strings, return true if they are anagrams of one another
const isAnagram = (s: string, t: string): boolean => {
  // Convert both strings to lowercase
  s = s.toLowerCase();
  t = t.toLowerCase();
  
  // Check if the lengths of both strings are equal
  if (s.length === t.length) {
    // Iterate through each character of the first string
    for (let i = 0; i < s.length; i++) {
      // Check if the current character of the first string is present in the second string
      let isAvailable = t.includes(s[i]);
      
      // If the character is not present in the second string, return false
      if (!isAvailable) {
        return false;
      }
    }
    // If all characters of the first string are found in the second string, return true
    return true;
  }
  // If the lengths of the strings are not equal, they cannot be anagrams, so return false
  return false;
};
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
