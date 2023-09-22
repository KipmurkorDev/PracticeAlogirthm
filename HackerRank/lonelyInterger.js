// Given an array of integers, where all elements but one occur twice, find the unique element.

function lonelyinteger(a) {
  // Write your code here
  for (let i = 0; i < a.length; i++) {
    let numValue = a.filter((item) => item === a[i]);
    if (numValue.length === 1) {
      return a[i];
    }
  }
}
