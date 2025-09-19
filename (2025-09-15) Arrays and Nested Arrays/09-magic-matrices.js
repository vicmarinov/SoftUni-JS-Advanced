function checkForMagicMatrix (matrix) {
    let firstRowSum = matrix[0].reduce((sum, num) => sum + num);

    for (let i = 0; i < matrix.length; i++) {
        let rowSum = matrix[i].reduce((sum, num) => sum + num);

        if (rowSum !== firstRowSum) return false;

        let colSum = 0;

        for (let j = 0; j < matrix.length; j++) {
            colSum += matrix[j][i];
        }

        if (colSum !== firstRowSum) return false;
    }

    return true;
}


console.log(checkForMagicMatrix(
    [[4, 5, 6],
     [6, 5, 4],
     [5, 5, 5]]
));

console.log(checkForMagicMatrix(
    [[11, 32, 45],
     [21,  0,  1],
     [21,  1,  1]]
));

console.log(checkForMagicMatrix(
    [[1, 0, 0],
     [0, 0, 1],
     [0, 1, 0]]
));