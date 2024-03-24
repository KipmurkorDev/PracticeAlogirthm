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
