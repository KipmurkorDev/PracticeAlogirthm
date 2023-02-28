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
    