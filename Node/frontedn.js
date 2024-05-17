import $ from "jquery";

const rootApp = document.getElementById("root");
rootApp.innerHTML = `<div id="mainArea">
  <p>button count: <id="counter">0</span></p>
  <button id="mainButton">Increase</button>
  let counter = 0;
  document.getElementById("mainButton").addEventListener("click", ()
  counter++;
  document.getElementById("counter").innerHTML = counter; 
  });
</div>`;

// const express=require('express')

const app = express();
console.log(`Worker ${process.pid} started`);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/api/slow", function (req, res) {
  console.time("slowApi");
  const baseNumber = 7;
  let result = 0;
  for (let i = Math.pow(baseNumber, 7); i >= 0; i--) {
    result += Math.atan(i) * Math.tan(i);
  }
  console.timeEnd("slowApi");

  console.log(`Result number is ${result} - on process ${process.pid}`);
  res.send(`Result number is ${result}`);
});
let port = 3000;
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

function addCount() {
  // Variable declaration
  var sum = 0;

  for (var i = 1; i < 100000; i++) {
    // Adding i to the sum variable
    sum += i;
  }

  // Return sum value
  return sum;
}

// Starts the timer
console.time("slowApi");

// Function call
addCount();

// Ends the timer and print the time
// taken by the piece of code
console.timeEnd("slowApi");
import process from "node:process";

process.on("beforeExit", (code) => {
  console.log("Process beforeExit event with code: ", code);
});

process.on("exit", (code) => {
  console.log("Process exit event with code: ", code);
});

console.log("This message is displayed first.");
const WEEKDAY = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
export function weekDayFromDate(date) {
  if (!(date instanceof Date)) {
    date = new Date(date);
  }
  return WEEKDAY[date.getWeekday()];
}
// weekday.mjs (ES Module)
import { weekDayFromDate } from "./weekday-from-date.mjs";
const dateString = process.argv[2] ?? null;
console.log(weekDayFromDate(dateString));
const path = require("path");
const os = require("os");
console.log(path.sep);
console.log(path.delimiter);
// common methhod in path modules
// path.basename(path, [,ext])
// path.dirname(path)
// path.extname(path)
// path.format(pathObj)
// path.isAbsolute(path)
// path.join(...path)
// path.normalize(path)
// path.parse(path)
// path.relative(from, to)
// path.resolve(...path)
console.log(path.extname("index.html"));
console.log(path.extname("app.js"));
console.log(path.extname("node.js.md"));
let pathToFile = path.format({
  dir: "public_html/home/js",
  base: "app.js",
});
let currentOS = {
  name: os.type(),
  architecture: os.arch(),
  platform: os.platform(),
  release: os.release(),
  version: os.version(),
};
const EventEmitter = require("events");

const emitter = new EventEmitter();

emitter.on("saved", (arg) => {
  console.log(`A saved event occurred: name: ${arg.name}, id: ${arg.id}`);
});

emitter.emit("saved", {
  id: 1,
  name: "John Doe",
});
console.log(pathToFile, currentOS);
console.log(os.EOL);

const EventEmitter = require("events");

class Stock extends EventEmitter {
  constructor(symbol, price) {
    super();
    this._symbol = symbol;
    this._price = price;
  }
  set price(newPrice) {
    if (newPrice !== this._price) {
      this.emit("PriceChanged", {
        symbol: this._symbol,
        oldPrice: this._price,
        newPrice: newPrice,
        adjustment: (((newPrice - this._price) * 100) / this._price).toFixed(2),
      });
    }
  }
  get price() {
    return this._price;
  }
  get symbol() {
    return this._symbol;
  }
}
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  // Method to insert a new node at the end of the list
  append(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current.next !== null) {
      current = current.next;
    }
    current.next = newNode;
  }

  // Method to display the elements of the linked list
  display() {
    let current = this.head;
    while (current !== null) {
      console.log(current.data);
      current = current.next;
    }
  }
}

// Example usage
const myList = new LinkedList();
myList.append(1);
myList.append(2);
myList.append(3);
myList.display(); // Output: 1, 2, 3
function sayHello() {
  const message = "Hello!";
  console.log(message);
}
const bookSeeker = "James";
const book = "Great Expectations";
function library() {
  const librarian = "Julia";
  console.log(bookSeeker + " asked " + librarian + " for " + book);
  function classicLiterature() {
    const shelf = "Dickens";
    console.log(bookSeeker + " found " + book + " on the " + shelf + " shelf!");
  }
  classicLiterature();
}

// <-- 4. JavaScript engine looks here last
const globalVar = "I am in the global scope";

function outerOuterFunction() {
  // <-- 3. JavaScript engine looks here third
  const outerOuterVar = "I am in the outerOuterFunction scope";
  function outerFunction() {
    // <-- 2. JavaScript engine looks here second
    const outerVar = "I am in the outerFunction scope";
    function innerFunction() {
      // <-- 1. JavaScript engine looks here first
      const innerVar = "I am in the innerFunction scope";
      console.log(globarVar);
    }
  }
}
