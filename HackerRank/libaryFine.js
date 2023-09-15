// Your local library needs your help! Given the expected and actual return dates for a library book, create a program that calculates the fine (if any). The fee structure is as follows:

// If the book is returned on or before the expected return date, no fine will be charged (i.e.: .

function libraryFine(d1, m1, y1, d2, m2, y2) {
  // Write your code here
  let result = 0;

  if (
    y1 > y2 ||
    (y1 === y2 && m1 > m2) ||
    (y1 === y2 && m1 === m2 && d1 > d2)
  ) {
    if (y1 === y2 && m1 === m2) {
      result = (d1 - d2) * 15;
    } else if (y1 === y2 && m1 > m2) {
      result = (m1 - m2) * 500;
    } else if (y1 > y2) {
      result = 10000; // Book returned in a different year
    }
  }

  return result;
}
