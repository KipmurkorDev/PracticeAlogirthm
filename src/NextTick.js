console.log("Hello => number 1");

setTimeout(() => {
  console.log("The timeout running last => number 4");
}, 0);

setImmediate(() => {
  console.log("Running before the timeout => number 3");
});

process.nextTick(() => {
  console.log("Running at next tick => number 2");
});

// 
// Including the module into out project
var process = require('process');

// It will return the current working directory
console.log('this is the working directory --> ' + process.cwd());

// It will return the version of process we are using
console.log('this is the process version --> ' + process.version);

// It will return the type of OS we are using at that time.
console.log('current OS we are using --> ' + process.platform);

exec('ls -lh', (error, stdout, stderr) => {
    if (err) {
console.error(err);
     return;
 }
if (stderr) {
    console.error(stderr);
      return;
}
    console.log(stdout);
     });
    
     // Declaring a counter variable
var no_versions = 0;
 
// Calling process.versions property
var versions = process.versions;
 
// Iterating through returned data
for (var key in versions) {
     
  // Printing key and its versions
  console.log(key + "\t".repeat(2-Math.floor((key.length-8)/8)) + versions[key]);
  no_versions++;
}
 
// Printing count value
console.log("\nTotal no of values available = " + no_versions);

var process = require('process');
  
// Define a funtion that will be triggered when an application exits 
process.on('exit', code => {
	setTimeout(() => {
		console.log('Will not get displayed');
	}, 0);

	console.log('Exited with status code:', code);
});

// Run an application 
console.log('Execution Completed');