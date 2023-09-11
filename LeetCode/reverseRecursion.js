// Write a program that reverses a string using recursion. Given the string "freeCodeCamp" your program should return "pmaCedoCeerf".

const reverseStr = (str) => {
  if (str.length <= 0) {
    return "";
  }
  let lastChar = str[str.length - 1];

  return lastChar + reverseStr(str.slice(0, -1));
};
