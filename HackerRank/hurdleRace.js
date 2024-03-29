// A video player plays a game in which the character competes in a hurdle race. Hurdles are of varying heights, and the characters have a maximum height they can jump. There is a magic potion they can take that will increase their maximum jump height by  unit for each dose. How many doses of the potion must the character take to be able to jump all of the hurdles. If the character can already clear all of the hurdles, return .

function hurdleRace(k, height) {
  // Write your code here
  let maxHeight = Math.max(...height);
  if (k >= maxHeight) {
    return 0;
  }
  return maxHeight - k;
}
