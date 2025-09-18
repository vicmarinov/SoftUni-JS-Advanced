function findBiggestNumOfMatrix (matrix) {
    let max = Number.MIN_SAFE_INTEGER;

    for (let row of matrix) {
        max = Math.max(max, Math.max(...row));
    }

    return max;
}

console.log(
    findBiggestNumOfMatrix(
        [
            [20, 50,  10],
            [ 8, 33, 145]
        ]
    )
);

console.log(
    findBiggestNumOfMatrix(
        [
            [ 3, 5,  7, 12],
            [-1, 4, 33,  2],
            [ 8, 3,  0,  4]
        ]
    )
);