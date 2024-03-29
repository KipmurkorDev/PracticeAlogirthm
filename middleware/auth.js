const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = function (req, res, next) {
  const token = req.header("x-auth-token");
  if (!token) return res.status(401).send("Access denied. No token provided.");

  try {
    const decoded = jwt.verify(token, config.get("jwtPrivateKey"));
    req.user = decoded;
    next();
  } catch (ex) {
    res.status(400).send("Invalid token.");
  }
};

// A palindrome is a word, phrase, or other type of string that can be read backwards or upside down. For example, “racecar” and “Anna” are palindromes. “Tisch” and “Juan” are not palindromes because they do not read the same from left to right and from right to left.
const palindrome = (str) => {
  str = str.toLowerCase();
  let strReverse = str.split("").reverse().join("");
  if (strReverse === str) {
    return true;
  }
  return false;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let arrToSet = new Set(nums);
  let newArr = [...arrToSet];
  return newArr;
};
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let index = 0;
  let set = new Set();

  for (let num of nums) {
    if (!set.has(num)) {
      nums[index++] = num;
      set.add(num);
    }
  }
  return index;
};
// Prompt the user to enter their name
var userName = prompt("What is your name?");

// Greet the user
alert("Hello, " + userName + "! Welcome to our website!");
// Stack implementation using JavaScript

// Define the Stack class
class Stack {
  constructor() {
    this.items = []; // Array to store stack elements
  }

  // Method to push an element onto the stack
  push(element) {
    this.items.push(element);
  }

  // Method to pop an element from the stack
  pop() {
    if (this.isEmpty()) {
      return "Underflow"; // If stack is empty, return Underflow
    }
    return this.items.pop(); // Remove and return the topmost element
  }

  // Method to peek the top element of the stack
  peek() {
    return this.items[this.items.length - 1];
  }

  // Method to check if the stack is empty
  isEmpty() {
    return this.items.length === 0;
  }

  // Method to get the size of the stack
  size() {
    return this.items.length;
  }

  // Method to print the stack elements
  printStack() {
    let str = "";
    for (let i = 0; i < this.items.length; i++) {
      str += this.items[i] + " ";
    }
    return str;
  }
}

// Example usage of the Stack class
let stack = new Stack();
console.log("Is the stack empty? " + stack.isEmpty()); // true
stack.push(10);
stack.push(20);
stack.push(30);
console.log("Stack elements: " + stack.printStack()); // 10 20 30
console.log("Is the stack empty? " + stack.isEmpty()); // false
console.log("Size of the stack: " + stack.size()); // 3
console.log("Top element of the stack: " + stack.peek()); // 30
console.log("Popped element: " + stack.pop()); // 30
console.log("Stack elements after pop: " + stack.printStack()); // 10 20

function countApplesAndOranges(s, t, a, b, apples, oranges) {
  let applesOnHouse = 0;
  let orangesOnHouse = 0;

  // Count apples that fall on the house
  for (let i = 0; i < apples.length; i++) {
    let applePosition = a + apples[i];
    if (applePosition >= s && applePosition <= t) {
      applesOnHouse++;
    }
  }

  // Count oranges that fall on the house
  for (let i = 0; i < oranges.length; i++) {
    let orangePosition = b + oranges[i];
    if (orangePosition >= s && orangePosition <= t) {
      orangesOnHouse++;
    }
  }

  // Print the results
  console.log(applesOnHouse);
  console.log(orangesOnHouse);
}
module.exports = function (handler) {
  return async (req, res, next) => {
    try {
      await handler(req, res);
    } catch (ex) {
      next(ex);
    }
  };
};
// A palindrome is a word, phrase, or other type of string that can be read backwards or upside down. For example, “racecar” and “Anna” are palindromes. “Tisch” and “Juan” are not palindromes because they do not read the same from left to right and from right to left.

function divisibleSumPairs(n, k, ar) {
  // Write your code here
  let count = 0;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      let sum = ar[i] + ar[j];
      if (sum % k === 0) {
        count++;
      }
    }
  }
  return count;
}
let myArray = [1, 2, 3, 4, 5];
let person = {
  name: "John",
  age: 30,
  city: "New York",
};
let myMap = new Map();
myMap.set("key1", "value1");
myMap.set("key2", "value2");
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let counts = {};

  for (let i = 0; i < nums.length; i++) {
    let count = counts[nums[i]] || 0;
    if (count < 2) {
      counts[nums[i]] = (counts[nums[i]] || 0) + 1;
    } else {
      nums.splice(i, 1);
    }
  }

  console.log(nums);
  return nums.length;
};
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }

  printList() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

// Example usage:
const linkedList = new LinkedList();
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
linkedList.append(4);
linkedList.printList(); // Output: 1 2 3 4
