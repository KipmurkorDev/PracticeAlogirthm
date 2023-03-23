fs.readFile("/file.md", (err, data) => {
    if (err) throw err;
  });
  
  myAwesomeFunction();
  var employees=[]
employees[0]={name:"George", age:32, retiredate:"March 12, 2014"}
employees[1]={name:"Edward", age:17, retiredate:"June 2, 2023"}
employees[2]={name:"Christine", age:58, retiredate:"December 20, 2036"}
employees[3]={name:"Sarah", age:62, retiredate:"April 30, 2020"}



function pluck(list, propertyName) {
    return list.map(function(i) {
      return i[propertyName];
    });
  }

const jwt = require('jsonwebtoken');

function signJWT(data) {
    return jwt.sign(data, process.env.JWT_KEY, { expiresIn: '7d' });
}


module.exports = {
    signJWT
}
const Supabase = require('@supabase/supabase-js');

const client = Supabase.createClient(process.env.SUPA_URL, process.env.SUPA_KEY);

const authClient = Supabase.createClient(process.env.SUPA_URL, process.env.SUPA_KEY);

module.exports = {
    client,
    authClient
};


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

const fs = require('fs');

const content3 = 'Some content!';

try {
  fs.writeFileSync('/Users/joe/test.txt', content);
  // file written successfully
} catch (err) {
  console.error(err);
}


const fs = require('fs/promises');

async function example() {
  try {
    const content = 'Some content!';
    await fs.writeFile('/Users/joe/test.txt', content);
  } catch (err) {
    console.log(err);
  }
}
example();