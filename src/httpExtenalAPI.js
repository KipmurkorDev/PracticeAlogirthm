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