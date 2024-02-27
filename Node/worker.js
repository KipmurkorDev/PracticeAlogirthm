const Homepage = () => {
  const [worker, setWorker] = useState(null);
  const [res, setRes] = useState([]);
  const [log, setLog] = useState([]);
  const [buttonState, setButtonState] = useState(false);

  const hanldeStartConnection = () => {
    // Send the message to the worker [postMessage]
    worker.postMessage({
      connectionStatus: "init",
    });
  };

  const handleStopConnection = () => {
    worker.postMessage({
      connectionStatus: "stop",
    });
  };

  //UseEffect1
  useEffect(() => {
    const myWorker = new Worker(
      new URL("../workers/main.worker.js", import.meta.url)
    ); //NEW SYNTAX
    setWorker(myWorker);

    return () => {
      myWorker.terminate();
    };
  }, []);

  //UseEffect2
  useEffect(() => {
    if (worker) {
      worker.onmessage = function (e) {
        if (typeof e.data === "string") {
          if (e.data.includes("[")) {
            setLog((preLogs) => [...preLogs, e.data]);
          } else {
            setRes((prevRes) => [...prevRes, { stockPrice: e.data }]);
          }
        }

        if (typeof e.data === "object") {
          setButtonState(e.data.disableStartButton);
        }
      };
    }
  }, [worker]);

  return (
    <>
      <div className="stats">
        <div className="control-panel">
          <h3>WebWorker Websocket example</h3>
          <button
            id="start-connection"
            onClick={hanldeStartConnection}
            disabled={!worker || buttonState}
          >
            Start Connection
          </button>
          &nbsp;
          <button
            id="stop-connection"
            onClick={handleStopConnection}
            disabled={!buttonState}
          >
            Stop Connection
          </button>
        </div>
        <LineChartComponent data={res} />
      </div>
      <Logger logs={log} />
    </>
  );
};

self.onmessage = function (e) {
  const workerData = e.data;
  postMessage("[WORKER] Web worker onmessage established");
  switch (workerData.connectionStatus) {
    case "init":
      socketInstance = createSocketInstance();
      socketManagement();
      break;

    case "stop":
      socketInstance.close();
      break;

    default:
      socketManagement();
  }
};
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
