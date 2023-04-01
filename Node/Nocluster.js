
// const express=require('express')

const app = express()
console.log(`Worker ${process.pid} started`);

app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.get('/api/slow', function (req, res) {
  console.time('slowApi');
  const baseNumber = 7;
  let result = 0;    
  for (let i = Math.pow(baseNumber, 7); i >= 0; i--) {        
    result += Math.atan(i) * Math.tan(i);
  };
  console.timeEnd('slowApi');

  console.log(`Result number is ${result} - on process ${process.pid}`);
  res.send(`Result number is ${result}`);
});
let port=3000
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
})

function addCount() {
    // Variable declaration
    var sum = 0;
    
    for (var i = 1; i < 100000; i++) {
      // Adding i to the sum variable
      sum += i;
    }
    
    // Return sum value
    return sum;
  }
    
  // Starts the timer
  console.time('slowApi');
    
  // Function call
  addCount();
    
  // Ends the timer and print the time
  // taken by the piece of code
  console.timeEnd('slowApi');
  import process from 'node:process';

  process.on('beforeExit', (code) => {
    console.log('Process beforeExit event with code: ', code);
  });
  
  process.on('exit', (code) => {
    console.log('Process exit event with code: ', code);
  });
  
  console.log('This message is displayed first.');
  const WEEKDAY = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']; 
  export function weekDayFromDate(date) { 
  if (!(date instanceof Date)) { 
  date = new Date(date); 
  } 
  return WEEKDAY[date.getWeekday()]; 
  } 
  // weekday.mjs (ES Module) 
  import { weekDayFromDate } from './weekday-from-date.mjs'; 
  const dateString = process.argv[2] ?? null; 
  console.log(weekDayFromDate(dateString));