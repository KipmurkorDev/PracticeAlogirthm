const mockingbird = {
  title: "To Kill a Mockingbird",
  describe: function () {
    console.log(`${this.title} is a classic novel`);
  },
};
const pride = {
  title: "Pride and Prejudice",
};
mockingbird.describe.call(pride);
function multiply(n1, n2) {
  return n1 * n2;
}
multiply.apply(window, [3, 4]);
