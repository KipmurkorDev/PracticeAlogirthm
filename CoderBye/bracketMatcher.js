// Have the function BracketMatcher(str) take the str parameter being passed and return 1 if the brackets are correctly matched and each one is accounted for. Otherwise return 0. For example: if str is "(hello (world))", then the output should be 1, but if str is "((hello (world))" the the output should be 0 because the brackets do not correctly match up. Only "(" and ")" will be used as brackets. If str contains no brackets return 1.

function BracketMatcher(str) {
  // code goes here
  let splitStr = str.split("");
  let left = 0;
  let right = 0;

  for (let i = 0; i < splitStr.length; i++) {
    if (splitStr[i] === "(") {
      left++;
    } else if (splitStr[i] === ")") {
      right++;
    }
    if (right > left) {
      return 0;
    }
  }
  if (left === right) {
    return 1;
  }
  return 0;
}

// keep this function call here
console.log(BracketMatcher(readline()));
