function diagonalAttack (inputArr) {
    let matrix = [];
    
    for (let inputRow of inputArr) {
        matrix.push(inputRow.split(' ').map(Number));
    }

    let mainDiagonalSum = 0;
    let secondaryDiagonalSum = 0;

    for (let i = 0; i < matrix.length; i++) {
        mainDiagonalSum += matrix[i][i];
        secondaryDiagonalSum += matrix[i][matrix.length - 1 - i];
    }

    if (mainDiagonalSum === secondaryDiagonalSum) {
        for (let row = 0; row < matrix.length; row++) {
            for (let col = 0; col < matrix.length; col++) {
                if (row === col || row == matrix.length - 1 - col) {
                    continue;
                }
                
                matrix[row][col] = mainDiagonalSum;
            }
        }
    }

    matrix.forEach(row => console.log(row.join(' ')));
}

diagonalAttack([
    '5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1'
]);

diagonalAttack([
    '1 1 1',
    '1 1 1',
    '1 1 0'
]);