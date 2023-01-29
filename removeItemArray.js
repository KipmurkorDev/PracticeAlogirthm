// remove item  in array

const fn = function (arr, itemToRemove) {
    for (var pos=0; pos < arr.length; pos++){
      if (arr[pos] == itemToRemove){
        var removedItem = arr.splice(pos,1);
      }
    }
    return arr;
  };

// add item to array

const addItemarray = function (arr, itemToAdd) {
    arr.push(itemToAdd);
    return arr;
  };