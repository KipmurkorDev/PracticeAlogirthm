// Given a sequence of integers , a triplet  is beautiful if:

// Given an increasing sequenc of integers and the value of , count the number of beautiful triplets in the sequence.

function beautifulTriplets(d, arr) {
  let count = 0;
  const n = arr.length;

  for (let i = 0; i < n - 2; i++) {
    for (let j = i + 1; j < n - 1; j++) {
      if (arr[j] - arr[i] === d) {
        for (let k = j + 1; k < n; k++) {
          if (arr[k] - arr[j] === d) {
            count++;
          }
        }
      }
    }
  }

  return count;
}
