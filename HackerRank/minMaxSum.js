// Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

function miniMaxSum(arr) {
  // Write your code here
  arr.sort((a, b) => a - b);
  let min = 0;
  let max = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    min += arr[i];
  }
  for (let j = 1; j < arr.length; j++) {
    max += arr[j];
  }
  console.log(min, max);
}
