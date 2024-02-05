// The frequency array is . These values can be used to create the sorted array as well: .

// Note
// For this exercise, always return a frequency array with 100 elements. The example above shows only the first 4 elements, the remainder being zeros.

// Challenge
// Given a list of integers, count and return the number of times each value appears as an array of integers.

// Function Description

// Complete the countingSort function in the editor below.

// countingSort has the following parameter(s):

// arr[n]: an array of integers

function countingSort(arr) {
  // Write your code here
  const frequencyArray = Array(100).fill(0);

  for (let value of arr) {
    frequencyArray[value]++;
  }

  return frequencyArray;
}
