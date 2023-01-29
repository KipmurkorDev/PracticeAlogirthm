

const indexOftarg = function (arr, targ) {
    for (var pos=0; pos < arr.length; pos++){
      if (arr[pos] == targ){
        return pos;
      }
    }
  };

// sum array in javascripts

const sumArray = function (arr) {
    var total = 0;
    for (var pos=0; pos < arr.length; pos++) {
      total += arr[pos];
    }
    return total;
  };