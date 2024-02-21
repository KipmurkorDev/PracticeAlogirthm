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
