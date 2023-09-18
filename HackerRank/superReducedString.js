// Reduce a string of lowercase characters in range ascii[‘a’..’z’]by doing a series of operations. In each operation, select a pair of adjacent letters that match, and delete them.

function superReducedString(s) {
  // Write your code here
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    if (stack.length > 0 && stack[stack.length - 1] === s[i]) {
      stack.pop();
    } else {
      stack.push(s[i]);
    }
  }

  if (stack.length === 0) {
    return "Empty String";
  } else {
    return stack.join("");
  }
}
