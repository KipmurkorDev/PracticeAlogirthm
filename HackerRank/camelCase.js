// There is a sequence of words in CamelCase as a string of letters, , having the following properties:

// It is a concatenation of one or more words consisting of English letters.
// All letters in the first word are lowercase.

function camelcase(s) {
  // Write your code here
  let countUpperCases = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i].toUpperCase() === s[i]) {
      countUpperCases++;
    }
  }

  return countUpperCases + 1;
}
