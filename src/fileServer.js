'use strict';
 
const express = require('express');
const ecstatic = require('ecstatic');
const http = require('http');
 
const app = express();
 
app.use(ecstatic({
  root: `${__dirname}/public`,
  showdir: true,
}));
 
http.createServer(app).listen(8080);
 
console.log('Listening on :8080')

// 
var express = require('express'),
    htmlDir = './html/'
    var app3 = express();

    //Log all requests
    app.use(express.logger());
    
    //Set content directories
    app.use(express.static(__dirname + '/html'));
    app.use('/js',express.static(__dirname + '/js'));
    app.use('/css', express.static(__dirname + '/css'));
    app.use("/image", express.static(__dirname + '/image'));
    
    app.get('/', function(request, response) {
        response.sendfile(htmlDir + 'turbocalendulator.html');
    });
    
    var port = process.env.PORT || 5000;
    app.listen(port, function() {
      console.log("Listening on " + port);
    });



    const fs = require('fs/promises');

async function example() {
  try {
    const data = await fs.readFile('/Users/joe/test.txt', { encoding: 'utf8' });
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}
example();
const fs = require('fs/promises');

async function example() {
  try {
    const data = await fs.readFile('/Users/joe/test.txt', { encoding: 'utf8' });
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}
example();


const fs = require('fs');

const content = 'Some content!';

fs.writeFile('/Users/joe/test.txt', content, err => {
  if (err) {
    console.error(err);
  }
  // file written successfully
});