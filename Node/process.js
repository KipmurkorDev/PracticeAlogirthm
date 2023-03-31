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