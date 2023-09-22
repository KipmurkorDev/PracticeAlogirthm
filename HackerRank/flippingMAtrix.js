function flippingMatrix(matrix) {
  // Write your code here
  const n = matrix.length / 2;
  let maxSum = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      const upperLeft = matrix[i][j];
      const upperRight = matrix[i][2 * n - 1 - j];
      const lowerLeft = matrix[2 * n - 1 - i][j];
      const lowerRight = matrix[2 * n - 1 - i][2 * n - 1 - j];

      maxSum += Math.max(upperLeft, upperRight, lowerLeft, lowerRight);
    }
  }

  return maxSum;
}
