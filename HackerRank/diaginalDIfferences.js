// Given a square matrix, calculate the absolute difference between the sums of its diagonals.

function diagonalDifference(arr) {
  // Write your code here
  let leftDiaginal = 0;
  let rightDiaginal = 0;
  let rightDiaginalLen = arr.length - 1;
  for (let i = 0; i < arr.length; i++, rightDiaginalLen--) {
    for (let j = 0; j < arr.length; j++) {
      if (i === j) {
        leftDiaginal += arr[i][j];
      }
      if (j === rightDiaginalLen) {
        rightDiaginal += arr[i][j];
      }
    }
  }
  return Math.abs(rightDiaginal - leftDiaginal);
}
