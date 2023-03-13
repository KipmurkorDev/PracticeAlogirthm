var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  res.write('Hello World!'); //write a response to the client
  res.end(); //end the response
}).listen(8080); //the server object listens on port 8080



http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  var q = url.parse(req.url, true).query;
  var txt = q.year + " " + q.month;
  res.end(txt);
}).listen(8080);



var options = {
  host: 'www.geeksforgeeks.org',
  path: '/courses',
  method: 'GET'
};

// Making a get request to 
// 'www.geeksforgeeks.org'
http.request(options, (response) => {

  // Printing the statusCode
  console.log(`STATUS: ${response.statusCode}`);
}).end();