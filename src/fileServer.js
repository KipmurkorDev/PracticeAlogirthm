"use strict";

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
