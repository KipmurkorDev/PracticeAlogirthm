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
