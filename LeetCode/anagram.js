// 5. Given two strings, return true if they are anagrams of one another
var isAnagram = function (s, t) {
  s = s.toLowerCase();
  t = t.toLowerCase();
  if (s.length === t.length) {
    for (let i = 0; i < s.length; i++) {
      let isAvailable = t.includes(s[i]);
      if (!isAvailable) {
        return false;
      }
    }
    return true;
  }
  return false;
};
