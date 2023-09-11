// 1. Given a string, reverse each word in the sentence

let str = "Write Edit and Run your Javascript code using JS Online Compiler";
const reverseSentenceByword = (str) => {
  let splitSentence = str.split(" ");
  let results = [];
  for (let i = splitSentence.length - 1; i >= 0; i--) {
    let reverseStr = splitSentence[i].split("").reverse().join("");
    results.push(reverseStr);
  }
  return results.join(" ");
};
console.log(reverseSentenceByword(str));
