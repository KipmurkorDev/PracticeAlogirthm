function htmlColorNames(arr) {
    // change code below this line
  let newColor = ['DarkSalmon','BlanchedAlmond'];
    arr.splice(0,2,newColor);
    // change code above this line
    return arr;
  } 
  
  
  
  // do not change code below this line
  console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurqoise', 'FireBrick']));