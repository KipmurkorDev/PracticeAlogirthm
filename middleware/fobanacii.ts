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
