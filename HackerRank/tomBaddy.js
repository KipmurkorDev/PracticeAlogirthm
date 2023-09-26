// Taum is planning to celebrate the birthday of his friend, Diksha. There are two types of gifts that Diksha wants from Taum: one is black and the other is white. To make her happy, Taum has to buy  black gifts and  white gifts.

// The cost of each black gift is  units.
// The cost of every white gift is  units.
// The cost to convert a black gift into white gift or vice versa is  units.
// Determine the minimum cost of Diksha's gifts.
function taumBday(b, w, bc, wc, z) {
  // Write your code here
  let res = 0;

  if (bc <= wc) {
    res += bc * b;
    if (bc + z <= wc) {
      res += (bc + z) * w;
    } else {
      res += wc * w;
    }
  } else {
    res += wc * w;
    if (wc + z <= bc) {
      res += (wc + z) * b;
    } else {
      res += bc * b;
    }
  }

  return res.toString();
}
