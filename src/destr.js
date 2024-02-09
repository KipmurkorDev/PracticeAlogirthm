const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80,
};

// Only change code below this line

const today = HIGH_TEMPERATURES.today;
const tomorrow = HIGH_TEMPERATURES.tomorrow;

// Only change code above this line
const chameleon = {
  eyes: 2,
  lookAround: function () {
    console.log(`I see you with my ${this.eyes} eyes!`);
  },
};

const car = {
  numberOfDoors: 4,
  drive: function () {
    console.log(`Get in one of the ${this.numberOfDoors} doors, and let's go!`);
  },
};

const letsRoll = car.drive;

letsRoll();
var iceCreamEaten = 1;

function consume(numberOfGallons) {
  var result = iceCreamEaten + numberOfGallons;

  function updateTotals(newTotal) {
    iceCreamEaten = result;
  }

  updateTotals();
}

consume(3);

let counter = 1;

function addDivToHeader() {
  const newDiv = document.createElement("div");
  newDiv.textContent = "div number " + counter;

  counter = counter + 1;

  const headerSection = document.querySelector("header");
  headerSection.appendChild(newDiv);
}

function addDivToFooter() {
  const newDiv = document.createElement("div");
  newDiv.textContent = "div number " + counter;

  counter = counter + 1;

  const headerSection = document.querySelector("footer");
  headerSection.appendChild(newDiv);
}

function Mouse() {
  this.favoriteFood = "cheese";
}

Mouse.prototype = rodent;

import mongoose from "mongoose";
import { Pagination } from "./Pagination";

// type FilterType = 'equal' | 'like' | 'gt' | 'lt'

// export type Filter = {
//     key: string,
//     type: FilterType,
//     value: string | number
// }

export function createAggregation(prj_id, collection_id, pagination, filters) {
  const collectionObject = new mongoose.Types.ObjectId(collection_id);

  const result = [
    {
      $match: {
        prj_id: parseInt(prj_id.toString()),
        collection_id: collectionObject,
      },
    },
    { $skip: pagination.page * pagination.pageElems },
    { $limit: pagination.pageElems },
  ];

  for (const filter of filters) {
    const fn = FilterFunctionMapping[filter.type];
    const res = { $match: fn(filter.key, filter.value) };
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

for (let property in duck) {
  if (duck.hasOwnProperty(property)) {
    ownProps.push(property);
  }
}

console.log(ownProps);
// A collection of the values 1, 2 and 3
const arr = [1, 2, 3];

// Each value is related to one another, in the sense that each is indexed in a position of the array
const indexOfTwo = arr.indexOf(2);
console.log(arr[indexOfTwo - 1]); // 1
console.log(arr[indexOfTwo + 1]); // 3

// We can perform many operations on the array, like pushing new values into it
arr.push(4);
console.log(arr); // [1,2,3,4]
let solution = 1;

for (let i = 1; i <= 12; i++) {
  solution *= i;
}

console.log(solution);

import mongoose from "mongoose";
import { Pagination } from "./Pagination";

// type FilterType = 'equal' | 'like' | 'gt' | 'lt'

// export type Filter = {
//     key: string,
//     type: FilterType,
//     value: string | number
// }

export function createAggregation(prj_id, collection_id, pagination, filters) {
  const collectionObject = new mongoose.Types.ObjectId(collection_id);

  const result = [
    {
      $match: {
        prj_id: parseInt(prj_id.toString()),
        collection_id: collectionObject,
      },
    },
    { $skip: pagination.page * pagination.pageElems },
    { $limit: pagination.pageElems },
  ];

  for (const filter of filters) {
    const fn = FilterFunctionMapping[filter.type];
    const res = { $match: fn(filter.key, filter.value) };
    result.push(res);
  }

  return result;
}

const express = require("express");
const ecstatic = require("ecstatic");
const http = require("http");

const app6 = express();

app.use(
  ecstatic({
    root: `${__dirname}/public`,
    showdir: true,
  })
);

http.createServer(app).listen(8080);

console.log("Listening on :8080");

//
var express = require("express"),
  htmlDir = "./html/";
var app3 = express();

//Log all requests
app.use(express.logger());

//Set content directories
app.use(express.static(__dirname + "/html"));
app.use("/js", express.static(__dirname + "/js"));
app.use("/css", express.static(__dirname + "/css"));
app.use("/image", express.static(__dirname + "/image"));

app.get("/", function (request, response) {
  response.sendfile(htmlDir + "turbocalendulator.html");
});

var port = process.env.PORT || 5000;
app.listen(port, function () {
  console.log("Listening on " + port);
});

const fs = require("fs/promises");

async function example() {
  try {
    const data = await fs.readFile("/Users/joe/test.txt", { encoding: "utf8" });
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}
example();
const fs = require("fs/promises");

async function example() {
  try {
    const data = await fs.readFile("/Users/joe/test.txt", { encoding: "utf8" });
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}
example();

const fs = require("fs");

const content = "Some content!";

fs.writeFile("/Users/joe/test.txt", content, (err) => {
  if (err) {
    console.error(err);
  }
  // file written successfully
});

const fs = require("fs");

const content3 = "Some content!";

try {
  fs.writeFileSync("/Users/joe/test.txt", content);
  // file written successfully
} catch (err) {
  console.error(err);
}

const fs = require("fs/promises");

async function example() {
  try {
    const content = "Some content!";
    await fs.writeFile("/Users/joe/test.txt", content);
  } catch (err) {
    console.log(err);
  }
}
example();
const express = require("express");

const app = express();

const port = process.env.PORT || 8000;

const eventEmitter = require("events");

app.get("/", (req, res) => {
  // Creating an event emitter class

  class Twitter extends eventEmitter {
    constructor() {
      super();
    }
  }

  // Initiating the event emitter

  let twitterEmitter = new Twitter();

  // Creating the event listener and callback function

  // postTweet is the name of the event

  twitterEmitter.on(
    "postTweet",

    (id, tweet, comments, retweets, likes, date) => {
      const data = {
        id: id,

        tweet: tweet,

        comments: comments,

        retweets: retweets,

        likes: likes,

        date: date,
      };

      console.log(data);

      res.json(data);
    }
  );

  // Running the callback function which emits the event

  twitterEmitter.emit("postTweet", 1, "Hello World!", 0, 0, 0, "08-01-2022");
});

app.listen(port, () =>
  console.log(`Tweet service running on ${port}, http://localhost:${port}`)
);

const eventEmitter = new EventEmitter();
eventEmitter.on("start", () => {
  console.log("started");
});
eventEmitter.emit("start");

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
  if (duck.hasOwnProperty(property)) {
    ownProps.push(property);
  }
}

console.log(ownProps);
const fruits = ["apple", "banana", "orange", "grape", "lychee"];

console.log(fruits);
// ['apple', 'banana', 'orange', 'grape', `lychee`]

const cat = {
  age: 2,
  name: "Bailey",
  meow: function () {
    console.log("Meow!");
  },
  greet: function (name) {
    console.log(`Hello ${name}`);
  },
};
let originalObject = {
  favoriteColor: "red",
};

function setToBlue(object) {
  object.favoriteColor = "blue";
}

setToBlue(originalObject);

originalObject.favoriteColor;
("use strict");

const express = require("express");
const ecstatic = require("ecstatic");
const http = require("http");

const app = express();

app.use(
  ecstatic({
    root: `${__dirname}/public`,
    showdir: true,
  })
);

http.createServer(app).listen(8080);

console.log("Listening on :8080");

//
var express = require("express"),
  htmlDir = "./html/";
var app3 = express();

//Log all requests
app.use(express.logger());

//Set content directories
app.use(express.static(__dirname + "/html"));
app.use("/js", express.static(__dirname + "/js"));
app.use("/css", express.static(__dirname + "/css"));
app.use("/image", express.static(__dirname + "/image"));

app.get("/", function (request, response) {
  response.sendfile(htmlDir + "turbocalendulator.html");
});

var port = process.env.PORT || 5000;
app.listen(port, function () {
  console.log("Listening on " + port);
});

const fs = require("fs/promises");

async function example() {
  try {
    const data = await fs.readFile("/Users/joe/test.txt", { encoding: "utf8" });
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}
example();
const fs = require("fs/promises");

async function example() {
  try {
    const data = await fs.readFile("/Users/joe/test.txt", { encoding: "utf8" });
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}
example();

const fs = require("fs");

const content = "Some content!";

fs.writeFile("/Users/joe/test.txt", content, (err) => {
  if (err) {
    console.error(err);
  }
  // file written successfully
});

const fs = require("fs");

const content3 = "Some content!";

try {
  fs.writeFileSync("/Users/joe/test.txt", content);
  // file written successfully
} catch (err) {
  console.error(err);
}

const fs = require("fs/promises");

async function example() {
  try {
    const content = "Some content!";
    await fs.writeFile("/Users/joe/test.txt", content);
  } catch (err) {
    console.log(err);
  }
}
example();
const express = require("express");
const bodyParser = require("body-parser");

let userGoal = "Learn Docker!";

app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send(`
    <html>
      <head>
        <link rel="stylesheet" href="styles.css">
      </head>
      <body>
        <section>
          <h2>My Course Goal</h2>
          <h3>${userGoal}</h3>
        </section>
        <form action="/store-goal" method="POST">
          <div class="form-control">
            <label>Course Goal</label>
            <input type="text" name="goal">
          </div>
          <button>Set Course Goal</button>
        </form>
      </body>
    </html>
  `);
});

app.post("/store-goal", (req, res) => {
  const enteredGoal = req.body.goal;
  console.log(enteredGoal);
  userGoal = enteredGoal;
  res.redirect("/");
});

app.listen(80);
