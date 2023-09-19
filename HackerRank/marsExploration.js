// Letters in some of the SOS messages are altered by cosmic radiation during transmission. Given the signal received by Earth as a string, , determine how many letters of the SOS message have been changed by radiation.

function marsExploration(s) {
  // Write your code here
  let expectedSOS = "SOS";
  let count = 0;
  for (let i = 0; i < s.length; i += 3) {
    let currentGroup = s.slice(i, i + 3);
    for (let j = 0; j < 3; j++) {
      if (currentGroup[j] !== expectedSOS[j]) {
        count++;
      }
    }
  }
  return count;
}
