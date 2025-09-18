function printMatrixDiagonalSums (matrix) {
    let mainDiagonalSum = 0;

    for (let i = 0; i < matrix.length; i++) {
        mainDiagonalSum += matrix[i][i];
    }
    
    let secondaryDiagonalSum = 0;

    for (let i = 0; i < matrix.length; i++) {
        secondaryDiagonalSum += matrix[i][matrix.length - i - 1];
    }

    console.log(mainDiagonalSum, secondaryDiagonalSum);
}

printMatrixDiagonalSums(
    [[20, 40],
     [10, 60]]
);

printMatrixDiagonalSums(
    [[ 3,  5, 17],
     [-1,  7, 14],
     [ 1, -8, 89]]
);