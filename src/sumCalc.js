function calc() {
    var extra = 5;
    var sum = function(a,b) {
      return a + b;
    }
    let total = extra + sum(2,3);
  }
  console.log(extra); // is extra accessible here?
  calc();
  console.log(total); // is total accessible here?