// Given a time in -hour AM/PM format, convert it to military (24-hour) time.

// Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
// - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

// Example

// Return '12:01:00'.

// Return '00:01:00'.

// Function Description

// Complete the timeConversion function in the editor below. It should return a new string representing the input time in 24 hour format.

// timeConversion has the following parameter(s):

// string s: a time in  hour format

function timeConversion(s) {
  const timeStamp = s.slice(-2);
  let hours = parseInt(s.slice(0, 2));
  const minutes = s.slice(3, 5);
  const seconds = s.slice(6, 8);

  if (timeStamp === "AM" && hours === 12) {
    hours = 0;
  } else if (timeStamp === "PM" && hours !== 12) {
    hours += 12;
  }

  if (hours < 10) {
    hours = "0" + hours;
  }

  return `${hours}:${minutes}:${seconds}`;
}
