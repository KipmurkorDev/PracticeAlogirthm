// You are given a number of sticks of varying lengths. You will iteratively cut the sticks into smaller sticks, discarding the shortest pieces until there are none left. At each iteration you will determine the length of the shortest stick remaining, cut that length from each of the longer sticks and then discard all the pieces of that shortest length. When all the remaining sticks are the same length, they cannot be shortened so discard them.

function cutTheSticks(arr) {
  // Write your code here
  let newArr = [...arr];
  let count = [];
  for (let i = 0; i < arr.length; i++) {
    if (newArr.length > 0) {
      let min = Math.min(...newArr);
      count.push(newArr.length);
      newArr = newArr.filter((item) => item - min !== 0);
    }
  }
  return count;
}
