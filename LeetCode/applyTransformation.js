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
