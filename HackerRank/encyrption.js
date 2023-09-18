// An English text needs to be encrypted using the following encryption scheme.
// First, the spaces are removed from the text. Let  be the length of this text.
// Then, characters are written into a grid, whose rows and columns have the following constraints:

function encryption(s) {
  let value = Math.ceil(Math.sqrt([...s].length));

  return [...s]
    .reduce((target, item, index) => {
      target[index % value] += item;
      return target;
    }, new Array(value).fill(""))
    .join(" ");
}
