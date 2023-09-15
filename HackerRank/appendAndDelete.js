// The first line contains a string , the initial string.
// The second line contains a string , the desired final string.
// The third line contains an integer , the number of operations

function appendAndDelete(s, t, k) {
  // Write your code here
  let i = 0;

  while (i < s.length && i < t.length && s[i] === t[i]) {
    i++;
  }

  const totalOps = s.length + t.length;

  const remainingOps = k - (totalOps - 2 * i);

  if (
    remainingOps >= 0 &&
    (remainingOps % 2 === 0 || remainingOps >= totalOps)
  ) {
    return "Yes";
  } else if (k >= totalOps) {
    return "Yes";
  } else {
    return "No";
  }
}
