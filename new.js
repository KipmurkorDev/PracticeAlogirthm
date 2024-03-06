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
