/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var getCommon = function (nums1, nums2) {
  let results = [];
  if (nums1.length > nums2.length) {
    for (let i = 0; i < nums1.length; i++) {
      for (let j = 0; j < nums2.length; j++) {
        if (nums2[j] === nums1[i]) {
          results.push(nums2[j]);
        }
      }
    }
  }
  for (let i = 0; i < nums2.length; i++) {
    for (let j = 0; j < nums1.length; j++) {
      if (nums1[j] === nums2[i]) {
        results.push(nums1[j]);
      }
    }
  }
  console.log(results);
  return Math.min(...results);
};
function memoize(fn) {
  const cache = {};
  const getCount = () => Object.keys(cache).length;

  return function (...args) {
    const key = JSON.stringify(args);
    if (cache.hasOwnProperty(key)) {
      console.log("getCallCount");
      return cache[key];
    } else {
      console.log("call");
      const result = fn(...args);
      cache[key] = result;
      return result;
    }
  };
}

const sum = (a, b) => a + b;
const fib = (n) => (n <= 1 ? 1 : fib(n - 1) + fib(n - 2));
const factorial = (n) => (n <= 1 ? 1 : n * factorial(n - 1));

function test(fnName, actions, values) {
  let results = [];
  let memoizedFn;

  if (fnName === "sum") memoizedFn = memoize(sum);
  else if (fnName === "fib") memoizedFn = memoize(fib);
  else if (fnName === "factorial") memoizedFn = memoize(factorial);

  for (let i = 0; i < actions.length; i++) {
    const action = actions[i];
    if (action === "call") {
      results.push(memoizedFn(...values[i]));
    } else if (action === "getCallCount") {
      results.push(memoizedFn.getCount());
    }
  }

  return results;
}

// Example 1:
let fnName = "sum";
let actions = ["call", "call", "getCallCount", "call", "getCallCount"];
let values = [[2, 2], [2, 2], [], [1, 2], []];
console.log(test(fnName, actions, values)); // Output: [4,4,1,3,2]

// Example 2:
fnName = "factorial";
actions = ["call", "call", "call", "getCallCount", "call", "getCallCount"];
values = [[2], [3], [2], [], [3], []];
console.log(test(fnName, actions, values)); // Output: [2,6,2,2,6,2]
/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function (n) {
  return function () {
    return n++;
  };
};

/**
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */

/**
 * @param {string} val
 * @return {Object}
 */
var expect = function (val) {
  return {
    toBe: function (otherVal) {
      if (val === otherVal) {
        return true;
      } else {
        throw new Error("Not Equal");
      }
    },
    notToBe: function (otherVal) {
      if (val !== otherVal) {
        return true;
      } else {
        throw new Error("Equal");
      }
    },
  };
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */
/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function (arr, fn) {
  let results = [];
  for (let i = 0; i < arr.length; i++) {
    let num = fn(arr[i], i);
    results.push(num);
  }
  return results;
};
// This is probably one of the less challenging challenges (no pun intended) — in terms of difficulty — but that doesn’t detract from the fact that you could come across it during a job interview. It goes like this.

const findVowels = (str) => {
  let count = 0;
  let vowels = ["a", "e", "i", "o", "u"];
  for (let i = 0; i < str.length; i++) {
    let isVowel = vowels.includes(str[i]);
    if (isVowel) {
      count++;
    }
  }
  return count;
};
// A palindrome is a word, phrase, or other type of string that can be read backwards or upside down. For example, “racecar” and “Anna” are palindromes. “Tisch” and “Juan” are not palindromes because they do not read the same from left to right and from right to left.
const palindrome = (str) => {
  str = str.toLowerCase();
  let strReverse = str.split("").reverse().join("");
  if (strReverse === str) {
    return true;
  }
  return false;
};
