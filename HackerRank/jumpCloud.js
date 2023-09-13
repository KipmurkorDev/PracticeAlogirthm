// There is a new mobile game that starts with consecutively numbered clouds. Some of the clouds are thunderheads and others are cumulus. The player can jump on any cumulus cloud having a number that is equal to the number of the current cloud plus  or . The player must avoid the thunderheads. Determine the minimum number of jumps it will take to jump from the starting postion to the last cloud. It is always possible to win the game.

function jumpingOnClouds(c) {
  // Write your code here
  let j = 0;
  for (let i = 0; i < c.length - 1; i++, j++) {
    if (i + 2 < c.length && c[i + 2] == 0) {
      i++;
    }
  }
  return j;
}
