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