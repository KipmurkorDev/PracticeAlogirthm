const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
  };
  
  // Only change code below this line
  
  const today = HIGH_TEMPERATURES.today;
  const tomorrow = HIGH_TEMPERATURES.tomorrow;
  
  // Only change code above this line
  const chameleon = {
    eyes: 2,
    lookAround: function () {
       console.log(`I see you with my ${this.eyes} eyes!`);
    }
  };

  const car = {
    numberOfDoors: 4,
    drive: function () {
       console.log(`Get in one of the ${this.numberOfDoors} doors, and let's go!`);
    }
  };
  
  const letsRoll = car.drive;
  
  letsRoll();
  var iceCreamEaten = 1;

function consume (numberOfGallons) {
  var result = iceCreamEaten + numberOfGallons;

  function updateTotals (newTotal) {
    iceCreamEaten = result;
  }

  updateTotals();
}

consume(3);

let counter = 1;

function addDivToHeader () {
  const newDiv = document.createElement('div');
  newDiv.textContent = 'div number ' + counter;

  counter = counter + 1;

  const headerSection = document.querySelector('header');
  headerSection.appendChild(newDiv)
}

function addDivToFooter() {
  const newDiv = document.createElement('div');
  newDiv.textContent = 'div number ' + counter;

  counter = counter + 1;

  const headerSection = document.querySelector('footer');
  headerSection.appendChild(newDiv)
}


function Mouse() {
    this.favoriteFood = 'cheese';
  }
  
  Mouse.prototype = rodent;


  import mongoose from "mongoose"
import { Pagination } from "./Pagination";

// type FilterType = 'equal' | 'like' | 'gt' | 'lt'

// export type Filter = {
//     key: string,
//     type: FilterType,
//     value: string | number
// }





export function createAggregation(prj_id, collection_id,  pagination, filters) {

    const collectionObject = new mongoose.Types.ObjectId(collection_id);

    const result = [
        { $match: { prj_id: parseInt(prj_id.toString()), collection_id: collectionObject } },
        { $skip: pagination.page * pagination.pageElems },
        { $limit: pagination.pageElems },
    ]

    for (const filter of filters) {
        const fn = FilterFunctionMapping[filter.type];
        const res = { $match: fn(filter.key, filter.value) }
        result.push(res);
    }

    return result;

}
function Bird(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 2;
}
let swan = new Bird();
swan.name = "Carlos";
swan.color = "white";


let ownProps = [];

for (let property in duck) {
if(duck.hasOwnProperty(property)) {
  ownProps.push(property);
}
}

console.log(ownProps);
// A collection of the values 1, 2 and 3
const arr = [1, 2, 3]

// Each value is related to one another, in the sense that each is indexed in a position of the array
const indexOfTwo = arr.indexOf(2)
console.log(arr[indexOfTwo-1]) // 1
console.log(arr[indexOfTwo+1]) // 3

// We can perform many operations on the array, like pushing new values into it
arr.push(4)
console.log(arr) // [1,2,3,4]