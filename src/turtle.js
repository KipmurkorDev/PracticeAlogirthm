
// equivalent code in JavaScript
var count = 1; 
var name = "Julia";
var num = 1.2932;
var price = 2.99;
/*
 * Programming Quiz: Converting Tempatures (2-2)
 *
 * The Celsius-to-Fahrenheit formula:
 *
 *    F = C x 1.8 + 32
 *
 * 1. Set the fahrenheit variable to the correct value using the celsius variable and the forumla above
 * 2. Log the fahrenheit variable to the console
 *
 */
 
/*
 * QUIZ REQUIREMENTS
 * 1. Your code should have a variable `celsius`
 * 2. You code should have a variable `fahrenheit`
 * 3. Your variable `celsius` should equal `12`
 * 4. Your variable `fahrenheit` should produce the output equal `53.6`
 * 5. Your variable `fahrenheit` declaration should use the `celsius` variable
 * 6. Your variable `fahrenheit` should have the correct formula
 * 7. Your code should log the `fahrenheit` variable
 * 8. Your code should not be empty
 */
 

var celsius = 12;
var fahrenheit =(celsius *1.8+32) /* convert celsius to fahrenheit here */

console.log(   fahrenheit/* print out result here */);

/*
 * Programming Quiz: MadLibs (2-11)
 * 
/*
 * QUIZ REQUIREMENTS
 * 1. Your code should have the variables - `adjective1`, `adjective2`, `adjective3`, and `madLib`.
 *
 * 2. Use the adjective1, adjective2, and adjective3 variables to set the madLib variable to the message:
 * 'The Intro to JavaScript course is amazing. James and Julia are so fun. I cannot wait to work through the rest of this entertaining content!'
 *
 * 3. Your madLib should match the given string
 * 4. The madLib variable should be printed to the console
 */
 
 // your code goes here
 var adjective1 = "amazing";
 var adjective2 = "fun";
 var adjective3 = "entertaining";
 var madLib= "The Intro to JavaScript course is "+ adjective1 +". James and Julia are so "+ adjective2 +". I cannot wait to work through the rest of this "+ adjective3 +" content!"
 console.log(madLib)