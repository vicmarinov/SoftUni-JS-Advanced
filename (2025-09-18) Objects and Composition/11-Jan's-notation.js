function printResultOfPostfixExpressions (inputArr) {
    const operandsArr = [];

    const operationsFunctions = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
        '/': (a, b) => a / b
    };

    for (let input of inputArr) {
        if (typeof input === 'number') {
            operandsArr.push(input);
            continue;
        } else if (typeof input !== 'string') {
            console.log('Error: invalid input!');
            return;
        }

        const operator = input;

        if (operandsArr.length < 2) {
            console.log("Error: not enough operands!");
            return;
        }

        let operandB = operandsArr.pop();
        let operandA = operandsArr.pop();

        let result = operationsFunctions[operator](operandA, operandB);
        operandsArr.push(result);
    }

    if (operandsArr.length > 1) {
        console.log('Error: too many operands!');
        return;
    }

    console.log(...operandsArr);
}

printResultOfPostfixExpressions([3, 4, '+']);
printResultOfPostfixExpressions([5, 3, 4, '*', '-']);
printResultOfPostfixExpressions([7, 33, 8, '-']);
printResultOfPostfixExpressions([15, '/']);