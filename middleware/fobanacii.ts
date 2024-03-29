function fibonacci(n: number): number {
    if (n <= 1) {
        return n;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

// Generate Fibonacci sequence up to the 10th number
const sequenceLength = 10;
for (let i = 0; i < sequenceLength; i++) {
    console.log(fibonacci(i));
}
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

function getTotalX(a, b) {
    // Function to calculate greatest common divisor (gcd)
    function gcd(a, b) {
        while (b) {
            let temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }

    // Function to calculate least common multiple (lcm)
    function lcm(a, b) {
        return (a * b) / gcd(a, b);
    }

    // Function to calculate gcd of an array
    function gcdOfArray(arr) {
        let result = arr[0];
        for (let i = 1; i < arr.length; i++) {
            result = gcd(result, arr[i]);
        }
        return result;
    }

    // Function to calculate lcm of an array
    function lcmOfArray(arr) {
        let result = arr[0];
        for (let i = 1; i < arr.length; i++) {
            result = lcm(result, arr[i]);
        }
        return result;
    }

    // Main logic
    let lcmA = lcmOfArray(a);
    let gcdB = gcdOfArray(b);
    
    let count = 0;
    let multiple = lcmA;
    while (multiple <= gcdB) {
        if (gcdB % multiple === 0) {
            count++;
        }
        multiple += lcmA;
    }
    return count;
}

// Example usage
let a = [2, 4];
let b = [16, 32, 96];
console.log(getTotalX(a, b));  // Output should be 3
function birthday(s, d, m) {
    let count = 0; 
    for (let i = 0; i <= s.length - m; i++) { 
        let sum = 0;
        for (let j = i; j < i + m; j++) { 
            sum += s[j];
        }
        if (sum === d) { 
            count++;
        }
    }
    return count; 
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
  const palindrome = (str) => {
    str = str.toLowerCase();
    let strReverse = str.split("").reverse().join("");
    if (strReverse === str) {
      return true;
    }
    return false;
  };
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
  
