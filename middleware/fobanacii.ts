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
