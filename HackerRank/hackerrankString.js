// We say that a string contains the word hackerrank if a subsequence of its characters spell the word hackerrank. Remeber that a subsequence maintains the order of characters selected from a sequence.

function hackerrankInString(s) {
  // Write your code here
  const hackerrank = "hackerrank";
  let i = 0,
    j = 0;

  while (i < s.length && j < hackerrank.length) {
    if (s[i] === hackerrank[j]) {
      j++;
    }
    i++;
  }

  if (j === hackerrank.length) {
    return "YES";
  } else {
    return "NO";
  }
}
