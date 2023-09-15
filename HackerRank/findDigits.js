// An integer  is a divisor of an integer  if the remainder of .

// Given an integer, for each digit that makes up the integer determine whether it is a divisor. Count the number of divisors occurring within the

function findDigits(n) {
  // Write your code here
  let count = 0;
  let value = n.toString().split("");
  for (let i = 0; i < value.length; i++) {
    let divider = parseInt(value[i]);
    if (n % divider === 0) {
      count++;
    }
  }
  return count;
}
