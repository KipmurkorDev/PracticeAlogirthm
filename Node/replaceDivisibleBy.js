var numbers = [
  [243, 12, 23, 12, 45, 45, 78, 66, 223, 3],
  [34, 2, 1, 553, 23, 4, 66, 23, 4, 55],
  [67, 56, 45, 553, 44, 55, 5, 428, 452, 3],
  [12, 31, 55, 445, 79, 44, 674, 224, 4, 21],
  [4, 2, 3, 52, 13, 51, 44, 1, 67, 5],
  [5, 65, 4, 5, 5, 6, 5, 43, 23, 4424],
  [74, 532, 6, 7, 35, 17, 89, 43, 43, 66],
  [53, 6, 89, 10, 23, 52, 111, 44, 109, 80],
  [67, 6, 53, 537, 2, 168, 16, 2, 1, 8],
  [76, 7, 9, 6, 3, 73, 77, 100, 56, 100],
];

const replaceOddAndEven = (arr) => {
  let results = [];
  for (let i = 0; i < arr.length; i++) {
    let subArr = [];
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] % 2 == 0) {
        subArr.push("Even");
      } else {
        subArr.push("Odd");
      }
    }
    results.push(subArr);
  }
  return results;
};

console.log(replaceOddAndEven(numbers));
const sister = {
  name: "Sarah",
  age: 23,
  parents: ["Alice", "Andy"],
  siblings: ["Julia"],
  favoriteColor: "purple",
  pets: true,
};
