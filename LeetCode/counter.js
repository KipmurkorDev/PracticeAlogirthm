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
