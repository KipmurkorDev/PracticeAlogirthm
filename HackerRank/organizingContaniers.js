// David has several containers, each with a number of balls in it. He has just enough containers to sort each type of ball he has into its own container. David wants to sort the balls using his sort method.

// David wants to perform some number of swap operations such that:

// Each container contains only balls of the same type.
// No two balls of the same type are located in different containers.

function organizingContainers(container) {
  // Write your code here
  const containerCounts = new Array(container.length).fill(0);
  const ballCounts = new Array(container.length).fill(0);

  for (let i = 0; i < container.length; i++) {
    for (let j = 0; j < container.length; j++) {
      containerCounts[i] += container[i][j];
      ballCounts[j] += container[i][j];
    }
  }

  containerCounts.sort((a, b) => a - b);
  ballCounts.sort((a, b) => a - b);

  for (let i = 0; i < container.length; i++) {
    if (containerCounts[i] !== ballCounts[i]) {
      return "Impossible";
    }
  }

  return "Possible";
}
