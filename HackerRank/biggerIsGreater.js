// Lexicographical order is often known as alphabetical order when dealing with strings. A string is greater than another string if it comes later in a lexicographically sorted list.

// Given a word, create a new word by swapping some or all of its characters. This new word must meet two criteria:

// It must be greater than the original word
// It must be the smallest word that meets the first condition

function biggerIsGreater(w) {
  let wordArray = w.split("");
  let n = wordArray.length;

  let i;
  for (i = n - 2; i >= 0; i--) {
    if (wordArray[i] < wordArray[i + 1]) {
      break;
    }
  }

  if (i === -1) {
    return "no answer";
  }

  let j;
  for (j = n - 1; j > i; j--) {
    if (wordArray[j] > wordArray[i]) {
      break;
    }
  }

  [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];

  let rightPart = wordArray.splice(i + 1);
  rightPart.sort();
  wordArray = wordArray.concat(rightPart);

  return wordArray.join("");
}

// Example usage:
const originalWord = "abdc";
const newWord = biggerIsGreater(originalWord);
console.log(newWord); // Output: "acbd"
