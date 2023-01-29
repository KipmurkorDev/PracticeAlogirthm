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

//   using spread operator combining two arrays


const combineTwoArrays = function (arr1, arr2) {
    // var arr = arr1.concat(arr2);
    let arr=[...arr1, ...arr2]
    return arr;
  };

//   addding element to any pos in js
const addItemToAnyPosition = function (arr, itemToAdd, pos) {
    arr.splice(pos, 0, itemToAdd);
    return arr;
  };

//   finding and iterating through object proporpties

const itereatPop = function (obj) {
    var ownProperties = [];
    for (var prop in obj) {
      // hasOwnProperty returns true if the property
      // belongs to the object, not its prototype chain.
      if (obj.hasOwnProperty(prop)) {
        ownProperties.push(prop + ': ' + obj[prop]);
      }
    }
    return ownProperties;
  };