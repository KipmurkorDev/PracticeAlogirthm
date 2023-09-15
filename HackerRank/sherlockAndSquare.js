// Watson likes to challenge Sherlock's math ability. He will provide a starting and ending value that describe a range of integers, inclusive of the endpoints. Sherlock must determine the number of square integers within that range.

function squares(a, b) {
  // Write your code here
  let count = 0;
  for (let i = a; i <= b; i++) {
    let sqrt = Math.sqrt(i);
    if (sqrt - Math.floor(sqrt) === 0) {
      count++;
    }
  }
  return count;
}

//  better version

function squares(a, b) {
  // Write your code here
  const start = Math.ceil(Math.sqrt(a));
  const end = Math.floor(Math.sqrt(b));

  return end - start + 1;
}
