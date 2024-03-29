const process=require('process')
// const flag=process.argv.indexOf('--user')
process.env.NAME="ememenenene"

process.stdout.write('Ask  question');

process.stdin.on('data', (answer)=>{
    console.log(answer.toString());
    process.exit()
})
process.nextTick(() => {  
    console.log('Got triggered in the next iteration of event loop');  
 });  
 setTimeout(() => {  
    console.log("Even after nextTick is executed");  
 }, 0);  
 console.log("First text to be printed"); 

 process.on('beforeExit', code => {
    // Can make asynchronous calls
    setTimeout(() => {
      console.log(`Process will exit with code: ${code}`)
      process.exit(code)
    }, 1000)
  });
  process.on('exit', code => {
    // Only synchronous calls
    console.log(`Process exited with code: ${code}`)
  });  
  console.log('After this, process will try to exit');


  process.on('exit', () => {  
    console.log('Perform any clean up like saving or releasing any memory');  
});  
// process.on('uncaughtException', (err) => {  
//     console.error('An unhandled exception is raised. Look at stack for more details');  
//     console.error(err.stack);
//     process.exit(1);
// });
// var test = {};  
// //raises an exception.  
// test.unKnownObject.toString();