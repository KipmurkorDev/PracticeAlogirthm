// Given an array of integers, determine the minimum number of elements to delete to leave only elements of equal value.

function equalizeArray(arr) {
  // Write your code here
  let arrSize = {};
  for (let i = 0; i < arr.length; i++) {
    if (!arrSize[arr[i]]) {
      arrSize[arr[i]] = 0;
    }
    arrSize[arr[i]] += 1;
  }

  let values = Object.values(arrSize);
  let maxValue = Math.max(...values);
  return arr.length - maxValue;
}
