function createFibonacciSequence () {
    let lastNumber = 0, currentNumber = 1;

    return function () {
        const currentFibonacciNumber = currentNumber;

        [currentNumber, lastNumber] = [
            currentNumber + lastNumber,
            currentNumber
        ];

        return currentFibonacciNumber;
    };
}

const fibonacciSequence = createFibonacciSequence();
console.log(fibonacciSequence());
console.log(fibonacciSequence());
console.log(fibonacciSequence());
console.log(fibonacciSequence());
console.log(fibonacciSequence());
console.log(fibonacciSequence());
console.log(fibonacciSequence());