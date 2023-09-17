// There is a string, , of lowercase English letters that is repeated infinitely many times. Given an integer, , find and print the number of letter a's in the first  letters of the infinite string.

function repeatedString(s, n) {
  let count = 0;
  if (s === "a") return n;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "a") {
      count++;
    }
  }
  const fullRepeats = Math.floor(n / s.length);
  count *= fullRepeats;
  const remainingChars = n % s.length;
  if (remainingChars !== 0) {
    for (let i = 0; i < remainingChars; i++) {
      if (s[i] === "a") {
        count++;
      }
    }
  }
  return count;
}
