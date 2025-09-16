function calculateMathOperation (num1, num2, operator) {
    const mathOperations = {
        "+": (x, y) => x + y,
        "-": (x, y) => x - y,
        "*": (x, y) => x * y,
        "/": (x, y) => x / y,
        "%": (x, y) => x % y,
        "**": (x, y) => x ** y
    };

    console.log(mathOperations[operator](num1, num2));
}

calculateMathOperation(5, 6, '+');
calculateMathOperation(3, 5.5, '*');