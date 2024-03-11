function howManyGames(p, d, m, s) {
  // Return the number of games you can buy
  let gamesBought = 0;
  while (s >= p) {
    s -= p;
    gamesBought++;
    p = Math.max(p - d, m);
  }
  return gamesBought;
}
// Write a program that returns the number of times a character appears in string. Your program should receive a string and the character. It should then return number of times the character appears in the string.

const countChar = (str, char) => {
  let count = 0;

  if (str.length <= 0) {
    return 0;
  }
  let checkChar = str[str.length - 1] === char;
  if (checkChar) {
    count = 1;
  } else {
    count = 0;
  }
  return count + countChar(str.slice(0, -1), char);
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
