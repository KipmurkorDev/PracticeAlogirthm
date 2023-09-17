// There is a string, , of lowercase English letters that is repeated infinitely many times. Given an integer, , find and print the number of letter a's in the first  letters of the infinite string.

function repeatedString(s, n) {
  // Write your code here
  let count = 0;
  let str = "";
  if (s === "a") {
    return n;
  } else if (s.length < n) {
    let multiplier = Math.ceil(n / s.length);
    str = s.repeat(multiplier);
  }

  for (let i = 0; i < n; i++) {
    if (str[i] === "a") {
      count++;
    }
  }
  return count;
}
