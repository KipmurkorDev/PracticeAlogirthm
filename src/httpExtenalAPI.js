// external app call
var http = require('http');
http.request({
host: 'www.google.com',
method: 'GET',
path: "/"
}, function(response) {
response.setEncoding("utf8");
response.on("readable", function() {
console.log(response.read())
});
}).end();

// pasre url
console.log(url.parse("http://www.etutorialspoint.com/index.php/nodejs/node-js-filesystem"));

//  check for cookies

var http = require('http');
var url = require('url');
var server = http.createServer(function(request, response) {
var cookies = request.headers.cookie;
if(!cookies) {
var cookieName = "session";
var cookieValue = "123456";
var expiryDate = new Date();
expiryDate.setDate(expiryDate.getDate() + 1);
var cookieText = cookieName + '=' + cookieValue + ';expires='
+ expiryDate.toUTCString() + ';';
response.setHeader('Set-Cookie', cookieText);
response.writeHead(302, {
'Location': '/'
});
return response.end();
}
cookies.split(';').forEach(function(cookie) {
var m = cookie.match(/(.*?)=(.*)$/);
cookies[m[1].trim()] = (m[2] || '').trim();
});
response.end("Cookie set: " + cookies.toString());
}).listen(8080);

// check the length of an object
var user = {
    first_name: "John",
    last_name: "Smith",
    age: "38",
    department: "Software"
    };
    console.log(user);
    console.log(Object.keys(user).length);
    delete user.last_name;
    console.log(user);
    console.log(Object.keys(user).length);


    // directory to json 

    var dirToJson = require('dir-to-json');
 
dirToJson( "./album", function( err, dirTree ){
    if( err ){
        throw err;
    }else{
        console.log( dirTree );
    }
});

// reading line by line in nodejs

var readline = require('readline');
var fs = require('fs');

var file= readline.createInterface({
  input: fs.createReadStream('demo.html')
});

var lineno = 0;
file.on('line', function (line) {
  lineno++;
  console.log('Line number ' + lineno + ': ' + line);
});
//  zip an files

var zlib = require('zlib');
var fs = require('fs');

var gzip = zlib.createGzip();
var r = fs.createReadStream('./demofile.txt');
var w = fs.createWriteStream('./demogzipfile.txt.gz');
r.pipe(gzip).pipe(w);

//
const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});
// 
const http = require("http");

const host = 'localhost';
const port = 8000;

const requestListener = function (req, res) {};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});
// sever 

const requestListener2 = function (req, res) {
  res.setHeader("Content-Type", "application/json");
  res.writeHead(200);
  res.end(`{"message": "This is a JSON response"}`);
};

// content of index.js
const http = require('http')
const port2 = 3000

const requestHandler = (request, response) => {
  console.log(request.url)
  response.end('Hello Node.js Server!')
}

const server = http.createServer(requestHandler)

server.listen(port2, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})

const express = require('express')
const app = express()
const port4 = 3000

app.get('/', (request, response) => {
  response.send('Hello from Express!')
})

app.listen(port4, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})


// index.js
const path = require('path')
const express = require('express')
const exphbs = require('express-handlebars')

const app3 = express()

app.engine('.hbs', exphbs({
  defaultLayout: 'main',
  extname: '.hbs',
  layoutsDir: path.join(__dirname, 'views/layouts')
}))
app.set('view engine', '.hbs')
app.set('views', path.join(__dirname, 'views'))