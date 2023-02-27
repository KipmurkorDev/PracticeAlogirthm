const fs = require('fs-extra')

fs.copy('/tmp/myfile', '/tmp/mynewfile')
  .then(() => console.log('success!'))

//   
const fs = require('fs-extra')

fs.copy('/tmp/myfile', '/tmp/mynewfile')
  .then(() => console.log('success!'))



  // Write Javascript code here
var cp = require('child_process');

var child = cp.fork(__dirname + '/sub.js');

child.on('message', function(m) {
console.log('Parent process received:', m);
});

child.send({ hello: 'from parent process' });

child.on('close', (code) => {
console.log(`child process exited with code ${code}`);
});



const { exec } = require('child_process');

// Counts the number of directory in
// current working directory
exec('dir | find /c /v ""', (error, stdout, stderr) => {
if (error) {
	console.error(`exec error: ${error}`);
	return;
}
console.log(`stdout: No. of directories = ${stdout}`);
if (stderr!= "")
console.error(`stderr: ${stderr}`);
});

