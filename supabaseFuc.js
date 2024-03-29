const Supabase = require("@supabase/supabase-js");
SUPA_URL = "https://mfugshihnjhkisrqshct.supabase.co";
SUPA_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1mdWdzaGlobmpoa2lzcnFzaGN0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzgwOTk4NTYsImV4cCI6MTk5MzY3NTg1Nn0.w5GftgA0tRY83Sr8g9T1NAmdGyUdMifL7hlMsGoujWc";
const client = Supabase.createClient(SUPA_URL, SUPA_KEY);

const getcredetialMockFuc = async (prj_id) => {
  const { data, error } = await client.rpc("add_user", {
    firstname: "emmanue",
    lastname: "kim",
    user_email: "emamanan@gmail.com",
    access_token: "78828288282",
    status: "kim8",
    job: "software developer",
    isstudent: false,
    inactivity: 1,
    deleted: false,
  });
  console.log(data);
};

getcredetialMockFuc();

async function authenticate(access_token, refresh_token) {
  // //* Check access token with supabase
  //  const res= await supabase.signInWithEmail()
  const result = await supabase.authClient.auth.api.getUser(access_token);
  console.log(result);
  //* No errors, return jwt
  if (!result.error) {
    const token = await generateJWT(result);
    return [true, token];
  }

  //* Error, token expired
  if (result.error.message.includes("token is expired")) {
    //* No refresh token, return error
    if (!refresh_token) return [false, result.error];
    //* Refresh session from token
    const session = await supabase.authClient.auth.setSession(refresh_token);
    //* Error during refresh
    if (session.error) return [false, session.error];

    //* Check access token with supabase
    const result = await supabase.authClient.auth.api.getUser(
      session.session.access_token
    );

    //* No errors, return jwt
    if (!result.error) {
      const token = await generateJWT(result);
      return [true, token];
    }

    //* Return error
    return [false, result.error];
  }

  //* Return error
  return [false, result.error];
}
("use strict");

const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on("end", function () {
  inputString = inputString.split("\n");

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/*
 * Complete the 'aPlusB' function below.
 *
 * The function is expected to return a STRING_ARRAY.
 * The function accepts STRING_ARRAY transactions as parameter.
 */

function aPlusB(lines) {
  // Write your code here
  let results = [];

  for (let i = 0; i < lines.length; i++) {
    let nums = lines[i].split(" ");
    let sum = parseInt(nums[0]) + parseInt(nums[1]);
    results.push(sum);
  }
  return results;
}

function main() {
  const ws = process.stdout;

  const linesCount = parseInt(readLine().trim(), 10);

  let lines = [];

  for (let i = 0; i < linesCount; i++) {
    const line = readLine();
    lines.push(line);
  }

  const result = aPlusB(lines);

  ws.write(result.join("\n") + "\n");

  ws.end();
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
