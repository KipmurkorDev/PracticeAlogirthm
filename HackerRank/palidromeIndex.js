// Given a string of lowercase letters in the range ascii[a-z], determine the index of a character that can be removed to make the string a palindrome. There may be more than one solution, but any will do. If the word is already a palindrome or there is no solution, return -1. Otherwise, return the index of a character to remove.

function palindromeIndex(s) {
  function isPalindrome(str) {
    return str === str.split("").reverse().join("");
  }

  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (s[left] !== s[right]) {
      if (isPalindrome(s.substring(0, left) + s.substring(left + 1))) {
        return left;
      }
      if (isPalindrome(s.substring(0, right) + s.substring(right + 1))) {
        return right;
      }
      return -1;
    }
    left++;
    right--;
  }

  return -1;
}
