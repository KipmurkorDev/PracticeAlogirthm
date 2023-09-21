// Find the number of ways that a given integer, , can be expressed as the sum of the  powers of unique, natural numbers.

// For example, if  and , we have to find all combinations of unique squares adding up to . The only solution is .

function powerSum(X, N) {
  const ans = [];
  const path = [];

  function dfs(i, X) {
    if (X === 0) {
      ans.push([...path]);
      return;
    }
    if (Math.pow(i, N) <= X) {
      dfs(i + 1, X);

      path.push(i);
      dfs(i + 1, X - Math.pow(i, N));
      path.pop();
    }
  }

  dfs(1, X);
  console.log(ans);
  return ans.length;
}

const X = parseInt(prompt("Enter the value of X:"));
const N = parseInt(prompt("Enter the value of N:"));
console.log(powerSum(X, N));
