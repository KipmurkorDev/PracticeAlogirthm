// Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with  places after the decimal.

function plusMinus(arr) {
  // Write your code here
  let positive = 0;
  let negative = 0;
  let zeros = 0;
  let n = arr.length;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      positive++;
    } else if (arr[i] === 0) {
      zeros++;
    } else {
      negative++;
    }
  }
  console.log((positive / n).toFixed(4));
  console.log((negative / n).toFixed(4));
  console.log((zeros / n).toFixed(4));
}
