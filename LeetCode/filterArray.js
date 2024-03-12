/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function (arr, fn) {
  let results = [];
  for (let i = 0; i < arr.length; i++) {
    let fnOutput = fn(arr[i], i);
    if (fnOutput) {
      results.push(arr[i]);
    }
  }
  return results;
};
