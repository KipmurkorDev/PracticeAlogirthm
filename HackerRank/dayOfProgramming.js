

// Marie invented a Time Machine and wants to test it by time-traveling to visit Russia on the Day of the Programmer (the 256th day of the year) during a year in the inclusive range from 1700 to 2700.



function dayOfProgrammer(year) {
    // Write your code here
  if (year === 1800 || year === 1900 || year === 1700) return "12.09." + year;
  if (year === 1918) return "26.09." + year;
  let leap = new Date(year, 1, 29).getDate() === 29;
  console.log(year + " : " + leap);
  return leap === true ? "12.09." + year : "13.09." + year;

}