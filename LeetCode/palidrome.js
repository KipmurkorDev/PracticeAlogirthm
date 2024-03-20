// A palindrome is a word, phrase, or other type of string that can be read backwards or upside down. For example, “racecar” and “Anna” are palindromes. “Tisch” and “Juan” are not palindromes because they do not read the same from left to right and from right to left.
const palindrome = (str) => {
  str = str.toLowerCase();
  let strReverse = str.split("").reverse().join("");
  if (strReverse === str) {
    return true;
  }
  return false;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let arrToSet = new Set(nums);
  let newArr = [...arrToSet];
  return newArr;
};
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let index = 0;
  let set = new Set();

  for (let num of nums) {
    if (!set.has(num)) {
      nums[index++] = num;
      set.add(num);
    }
  }
  return index;
};
