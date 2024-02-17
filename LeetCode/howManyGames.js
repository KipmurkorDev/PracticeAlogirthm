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
