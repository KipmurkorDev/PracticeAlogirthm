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

const EventEmitter = require("events");

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
function chocolateFeast(n, c, m) {
  // Write your code here
  let wrappers = Math.floor(n / c);
  let totalCholate = Math.floor(n / c);
  while (wrappers >= m) {
    wrappers -= m;
    totalCholate++;
    wrappers++;
  }
  return totalCholate;
}
class Stack {
  constructor() {
    this.items = [];
  }

  // Push element to the top of the stack
  push(element) {
    this.items.push(element);
  }

  // Remove and return the top element from the stack
  pop() {
    if (this.isEmpty()) {
      return "Underflow";
    }
    return this.items.pop();
  }

  // Return the top element without removing it
  peek() {
    return this.items[this.items.length - 1];
  }

  // Check if the stack is empty
  isEmpty() {
    return this.items.length === 0;
  }

  // Return the size of the stack
  size() {
    return this.items.length;
  }

  // Clear the stack
  clear() {
    this.items = [];
  }
}

// Example usage:
const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);

console.log("Top element:", stack.peek()); // Output: 30

console.log("Popped element:", stack.pop()); // Output: 30

console.log("Stack size:", stack.size()); // Output: 2

stack.clear();
console.log("Is the stack empty?", stack.isEmpty()); // Output: true

class Queue {
  constructor() {
    this.items = [];
  }

  // Add an element to the queue
  enqueue(element) {
    this.items.push(element);
  }

  // Remove and return the front element from the queue
  dequeue() {
    if (this.isEmpty()) {
      return "Underflow";
    }
    return this.items.shift();
  }

  // Return the front element without removing it
  front() {
    if (this.isEmpty()) {
      return "No elements in Queue";
    }
    return this.items[0];
  }

  // Check if the queue is empty
  isEmpty() {
    return this.items.length === 0;
  }

  // Return the size of the queue
  size() {
    return this.items.length;
  }

  // Clear the queue
  clear() {
    this.items = [];
  }
}

// Example usage:
const queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

console.log("Front element:", queue.front()); // Output: 10

console.log("Dequeued element:", queue.dequeue()); // Output: 10

console.log("Queue size:", queue.size()); // Output: 2

queue.clear();
console.log("Is the queue empty?", queue.isEmpty()); // Output: true
("use strict");
var __createBinding =
  (this && this.__createBinding) ||
  (Object.create
    ? function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (
          !desc ||
          ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)
        ) {
          desc = {
            enumerable: true,
            get: function () {
              return m[k];
            },
          };
        }
        Object.defineProperty(o, k2, desc);
      }
    : function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
      });
var __setModuleDefault =
  (this && this.__setModuleDefault) ||
  (Object.create
    ? function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      }
    : function (o, v) {
        o["default"] = v;
      });
var __importStar =
  (this && this.__importStar) ||
  function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null)
      for (var k in mod)
        if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
          __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
  };
var __spreadArray =
  (this && this.__spreadArray) ||
  function (to, from, pack) {
    if (pack || arguments.length === 2)
      for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
          if (!ar) ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
        }
      }
    return to.concat(ar || Array.prototype.slice.call(from));
  };
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
exports.__esModule = true;
exports.getLiveBuild = exports.getBuildInfo = exports.addToBuildQueue = void 0;
var Builder_1 = __importDefault(require("../Builder"));
var fse = __importStar(require("fs-extra"));
var child_process_1 = __importDefault(require("child_process"));
var Packages_1 = __importDefault(require("../models/Packages"));
var path_1 = __importDefault(require("path"));
function addToBuildQueue(projectId, filePath, platform) {
  if (!projectId || !filePath || !platform) return;
  //* Check if the projectId is in queue
  var isInQueue = Builder_1["default"].builds.find(function (b) {
    return b.projectId == projectId;
  });
  if (isInQueue) return;
  //   get packages
  var packages = (0, Packages_1["default"])(filePath);
  if (packages.length > 0) {
    var spawnArgs = __spreadArray(["pub", "add"], packages, true);
    child_process_1["default"].spawn("touch", ["pubspec.yaml"]);
    // add dependency to pubspec.yaml
    child_process_1["default"].spawn(
      Builder_1["default"].flutterPath,
      spawnArgs
    );
  }
  //* Clear project folder
  if (fse.existsSync("projects/".concat(projectId))) {
    fse.rmSync("projects/".concat(projectId), { force: true, recursive: true });
  }
  fse.mkdirSync("projects/".concat(projectId), { recursive: true });
  //* Move file to project
  // const old_projectPath = `projects/${projectId}/current${filePath.replace('tmp/', '')}.dart`;
  var projectPath = "projects/".concat(projectId, "/current/lib/main.dart");
  fse.moveSync(filePath, projectPath, { overwrite: true });
  console.log(projectPath);
  //* Find primary directory
  var projectsCurrent = "projects/".concat(projectId, "/current");
  var primaryDirectoryPath = function () {
    if (fse.existsSync("".concat(projectsCurrent))) {
      return path_1["default"].join(__dirname, "../../", projectsCurrent);
    }
    return;
  };
  var build = Builder_1["default"].build(
    projectId,
    primaryDirectoryPath(),
    platform
  );
  return build.buildId;
}
exports.addToBuildQueue = addToBuildQueue;
function getBuildInfo(buildId) {
  var build = Builder_1["default"].builds.find(function (b) {
    return b.buildId == buildId;
  });
  if (!build) {
    var buildFinished = Builder_1["default"].completedBuilds.find(function (b) {
      return b.buildId == buildId;
    });
    if (!buildFinished) return;
    return buildFinished.serialize();
  }
  return build.serialize();
}
exports.getBuildInfo = getBuildInfo;
function getLiveBuild(buildId) {
  var buildFinished = Builder_1["default"].completedBuilds.find(function (b) {
    return b.buildId == buildId;
  });
  if (!buildFinished) return;
  return buildFinished.projectPath;
}
exports.getLiveBuild = getLiveBuild;
// {
//     "timestamp": 1680794886240,
//     "data": "Target file \"lib/main.dart\" not found.\n"
// },
// {
//     "timestamp": 1680794886508,
//     "data": "Error: ENOENT: no such file or directory, lstat '/Users/kipmurkoremmanuel/Desktop/WidgetBuilderTheta/projects/124/current/build/web'"
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
// Import TensorFlow.js library
import * as tf from "@tensorflow/tfjs";

// Define the model architecture
model.add(
  tf.layers.dense({ units: 10, inputShape: [784], activation: "relu" })
);
model.add(tf.layers.dense({ units: 10, activation: "relu" }));
model.add(tf.layers.dense({ units: 10, activation: "softmax" }));

// Compile the model
model.compile({
  optimizer: "sgd",
  loss: "categoricalCrossentropy",
  metrics: ["accuracy"],
});

// Generate some dummy data for training
const data = tf.randomNormal([100, 784]);
const labels = tf.randomUniform([100, 10]);

// Train the model
model.fit(data, labels, {
  epochs: 10,
  batchSize: 32,
  callbacks: {
    onEpochEnd: (epoch, logs) => {
      console.log(
        `Epoch ${epoch + 1}: loss = ${logs.loss}, accuracy = ${logs.acc}`
      );
    },
  },
});
// Import TensorFlow.js library
import * as tf from "@tensorflow/tfjs";

// Generate some dummy data for training
const numSamples = 100;
const trueWeights = [2, -3.4];
const trueBias = 4.2;
const inputTensor = tf.randomNormal([numSamples, 2]);
const noise = tf.randomNormal([numSamples, 1]);
const outputTensor = inputTensor
  .mul(tf.tensor2d(trueWeights, [2, 1]))
  .sum(1)
  .add(tf.scalar(trueBias))
  .add(noise);

// Define the model architecture
const model = tf.sequential();
model.add(tf.layers.dense({ units: 1, inputShape: [2] }));

// Compile the model
model.compile({ optimizer: "sgd", loss: "meanSquaredError" });

// Train the model
async function trainModel() {
  const history = await model.fit(inputTensor, outputTensor, {
    epochs: 100,
    callbacks: {
      onEpochEnd: (epoch, logs) => {
        console.log(`Epoch ${epoch + 1}: loss = ${logs.loss}`);
      },
    },
  });

  console.log("Training complete.");
}

// Execute the training

var http = require("http");

//create a server object:
http
  .createServer(function (req, res) {
    res.write("Hello World!"); //write a response to the client
    res.end(); //end the response
  })
  .listen(8080); //the server object listens on port 8080

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    var q = url.parse(req.url, true).query;
    var txt = q.year + " " + q.month;
    res.end(txt);
  })
  .listen(8080);

var options = {
  host: "www.geeksforgeeks.org",
  path: "/courses",
  method: "GET",
};

// Making a get request to
// 'www.geeksforgeeks.org'
http
  .request(options, (response) => {
    // Printing the statusCode
    console.log(`STATUS: ${response.statusCode}`);
  })
  .end();
console.log("Before");
getUser(1, (user) => {
  getRepositories(user.gitHubUsername, (repos) => {
    getCommits(repos[0], (commits) => {
      console.log(commits);
    });
  });
});
console.log("After");

function getUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Reading a user from a database...");
      resolve({ id: id, gitHubUsername: "mosh" });
    }, 2000);
  });
}

function getRepositories(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Calling GitHub API...");
      resolve(["repo1", "repo2", "repo3"]);
    }, 2000);
  });
}

function getCommits(repo, callback) {
  setTimeout(() => {
    console.log("Calling GitHub API...");
    callback(["commit"]);
  }, 2000);
}
app.get("/heavy", (req, res) => {
  let total = 0;
  for (let i = 0; i < 5_000_000; i++) {
    total++;
  }
  res.send(`The result of the CPU intensive task is ${total}\n`);
});
import express from "express";

console.log(`worker pid=${process.pid}`);

app.get("/heavy", (req, res) => {
  let total = 0;
  for (let i = 0; i < 5_000_000; i++) {
    total++;
  }
  res.send(`The result of the CPU intensive task is ${total}\n`);
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
const VALID_KEYS_PATH = __dirname + "/valid-keys.txt";
const fs = require("fs");

const fileChecker = (filename, text) => {
  const contents = fs.readFileSync(filename, "utf-8");

  return contents.toLowerCase().includes(text.toLowerCase());
};
module.exports = function (req, res, next) {
  let token = req.headers["x-api-key"];
  if (token) {
    let output = fileChecker(VALID_KEYS_PATH, token);
    if (output) next();
  }
  return res.status(401);
};
const fs = require("fs");
const shortid = require("shortid");
// To generate a unique API KEY, use shortid.generate()
const LINE_ENDING = require("os").EOL;

module.exports = function (req, res) {
  let newKey = shortid.generate() + LINE_ENDING;
  fs.appendFile("valid-keys.txt", newKey, function (err) {
    if (err) throw err;
    res.status(201).send({ apiKey: newKey });
  });
};

import express from "express";
import cors from "cors";
import morgan from "morgan";

import dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";

mongoose.connect(process.env.DB_URI, {
  dbName: process.env.DB_NAME,
});

export const app = express();
app.use(cors());
app.use(morgan("dev"));

app.post("/duplication/:prj_id/:new_prj_id", async (req, res) => {
  try {
    // const secret = req.headers['secret-duplication'];
    // if (secret != 'c4m3r13r4!') return res.status(403).json({ error: 'Not authorized' });
    const result = await duplicateCMS(
      parseInt(req.params.prj_id),
      parseInt(req.params.new_prj_id)
    );
    return res.json(result);
  } catch (ex) {
    return res.status(500).json({ error: ex.message });
  }
});

import { useAuth } from "./middlewares/useAuth";
app.use(useAuth);

import CollectionRouter from "./routes/CollectionRouter";
import DocumentRouter from "./routes/DocumentRouter";

app.use("/collection", CollectionRouter);
app.use("/document", DocumentRouter);

app.use("/aya/:prj_id", express.text(), async (req, res) => {
  try {
    const result = await executeAyayaQuery(
      req.body,
      res.locals.auth,
      req.params.prj_id
    );
    return res.json(result);
  } catch (ex) {
    console.error(ex);
    return res.status(500).json({ error: ex.message });
  }
});

app.use("/aya_raw/:prj_id", express.text(), async (req, res) => {
  try {
    const result = await executeAyayaQuery(
      req.body,
      res.locals.auth,
      req.params.prj_id,
      true
    );
    return res.json(result);
  } catch (ex) {
    console.error(ex);
    return res.status(500).json({ error: ex.message });
  }
});

import https from "https";
import fs from "fs";

server.listen(9010, () => console.log("Listening on port 9010"));

import * as StreamService from "./services/StreamService";
import { duplicateCMS } from "./controllers/DuplicationController";
import { executeAyayaQuery } from "./controllers/AyayaController";

StreamService.server.listen(server);

export function stop() {
  server.close();
  mongoose.disconnect();
}

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

var http = require("http");

//create a server object:
http
  .createServer(function (req, res) {
    res.write("Hello World!"); //write a response to the client
    res.end(); //end the response
  })
  .listen(8080); //the server object listens on port 8080

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    var q = url.parse(req.url, true).query;
    var txt = q.year + " " + q.month;
    res.end(txt);
  })
  .listen(8080);

var options = {
  host: "www.geeksforgeeks.org",
  path: "/courses",
  method: "GET",
};

// Making a get request to
// 'www.geeksforgeeks.org'
http
  .request(options, (response) => {
    // Printing the statusCode
    console.log(`STATUS: ${response.statusCode}`);
  })
  .end();
console.log("Before");
getUser(1, (user) => {
  getRepositories(user.gitHubUsername, (repos) => {
    getCommits(repos[0], (commits) => {
      console.log(commits);
    });
  });
});
console.log("After");

function getUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Reading a user from a database...");
      resolve({ id: id, gitHubUsername: "mosh" });
    }, 2000);
  });
}

function getRepositories(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Calling GitHub API...");
      resolve(["repo1", "repo2", "repo3"]);
    }, 2000);
  });
}

function getCommits(repo, callback) {
  setTimeout(() => {
    console.log("Calling GitHub API...");
    callback(["commit"]);
  }, 2000);
}
app.get("/heavy", (req, res) => {
  let total = 0;
  for (let i = 0; i < 5_000_000; i++) {
    total++;
  }
  res.send(`The result of the CPU intensive task is ${total}\n`);
});
import express from "express";

const port = 3000;

console.log(`worker pid=${process.pid}`);

app.get("/heavy", (req, res) => {
  let total = 0;
  for (let i = 0; i < 5_000_000; i++) {
    total++;
  }
  res.send(`The result of the CPU intensive task is ${total}\n`);
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
const fs = require("fs");

module.exports = function (req, res, next) {
  let token = req.headers["x-api-key"];
  if (token) {
    let output = fileChecker(VALID_KEYS_PATH, token);
    if (output) next();
  }
  return res.status(401);
};
const fs = require("fs");
const shortid = require("shortid");
// To generate a unique API KEY, use shortid.generate()
const LINE_ENDING = require("os").EOL;

module.exports = function (req, res) {
  let newKey = shortid.generate() + LINE_ENDING;
  fs.appendFile("valid-keys.txt", newKey, function (err) {
    if (err) throw err;
    res.status(201).send({ apiKey: newKey });
  });
};

import express from "express";
import cors from "cors";
import morgan from "morgan";

import dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";

mongoose.connect(process.env.DB_URI, {
  dbName: process.env.DB_NAME,
});

app.use(cors());
app.use(morgan("dev"));

app.post("/duplication/:prj_id/:new_prj_id", async (req, res) => {
  try {
    // const secret = req.headers['secret-duplication'];
    // if (secret != 'c4m3r13r4!') return res.status(403).json({ error: 'Not authorized' });
    const result = await duplicateCMS(
      parseInt(req.params.prj_id),
      parseInt(req.params.new_prj_id)
    );
    return res.json(result);
  } catch (ex) {
    return res.status(500).json({ error: ex.message });
  }
});

import { useAuth } from "./middlewares/useAuth";
app.use(useAuth);

import CollectionRouter from "./routes/CollectionRouter";
import DocumentRouter from "./routes/DocumentRouter";

app.use("/collection", CollectionRouter);
app.use("/document", DocumentRouter);

app.use("/aya/:prj_id", express.text(), async (req, res) => {
  try {
    const result = await executeAyayaQuery(
      req.body,
      res.locals.auth,
      req.params.prj_id
    );
    return res.json(result);
  } catch (ex) {
    console.error(ex);
    return res.status(500).json({ error: ex.message });
  }
});

app.use("/aya_raw/:prj_id", express.text(), async (req, res) => {
  try {
    const result = await executeAyayaQuery(
      req.body,
      res.locals.auth,
      req.params.prj_id,
      true
    );
    return res.json(result);
  } catch (ex) {
    console.error(ex);
    return res.status(500).json({ error: ex.message });
  }
});

import https from "https";
import fs from "fs";

export const server = https.createServer(
  {
    // cert: fs.readFileSync('/etc/letsencrypt/live/cms.teta.so/fullchain.pem'),
    // key: fs.readFileSync('/etc/letsencrypt/live/cms.teta.so/privkey.pem'),
    cert: fs.readFileSync("/Users/kipmurkoremmanuel/desktop/certs/cert.pem"),
    key: fs.readFileSync("/Users/kipmurkoremmanuel/desktop/certs/key.pem"),
  },
  app
);

server.listen(9010, () => console.log("Listening on port 9010"));

import * as StreamService from "./services/StreamService";
import { duplicateCMS } from "./controllers/DuplicationController";
import { executeAyayaQuery } from "./controllers/AyayaController";

StreamService.server.listen(server);

export function stop() {
  server.close();
  mongoose.disconnect();
}
const Joi = require("joi");
const mongoose = require("mongoose");

const genreSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50,
  },
});

const Genre = mongoose.model("Genre", genreSchema);

function validateGenre(genre) {
  const schema = {
    name: Joi.string().min(3).required(),
  };

  return Joi.validate(genre, schema);
}

exports.genreSchema = genreSchema;
exports.Genre = Genre;
exports.validate = validateGenre;
