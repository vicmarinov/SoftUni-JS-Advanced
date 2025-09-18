function getEqualNeighborsQuantity (matrix) {
    let equalNeighborsQuantity = 0;

    for (let rowIdx = 0; rowIdx < matrix.length; rowIdx++) {
        for (let colIdx = 0; colIdx < matrix[rowIdx].length; colIdx++) {
            let currentEl = matrix[rowIdx][colIdx];

            if (matrix[rowIdx + 1] &&
                matrix[rowIdx + 1][colIdx] === currentEl) {
                equalNeighborsQuantity++;
            }

            if (matrix[rowIdx - 1] &&
                matrix[rowIdx - 1][colIdx] === currentEl) {
                equalNeighborsQuantity++;
            }

            if (matrix[rowIdx][colIdx + 1] &&
                matrix[rowIdx][colIdx + 1] === currentEl) {
                equalNeighborsQuantity++;
            }

            if (matrix[rowIdx][colIdx - 1] &&
                matrix[rowIdx][colIdx - 1] === currentEl) {
                equalNeighborsQuantity++;
            }
        }
    }

    equalNeighborsQuantity /= 2; // because it was counted in both elements in each pair;
    
    return equalNeighborsQuantity;
}

console.log(
    getEqualNeighborsQuantity(
        [
            ['2', '3', '4', '7', '0'],
            ['4', '0', '5', '3', '4'],
            ['2', '3', '5', '4', '2'],
            ['9', '8', '7', '5', '4']
        ]
    )
);

console.log(
    getEqualNeighborsQuantity(
        [
            ['test', 'yes' , 'yo' , 'ho'],
            ['well', 'done', 'yo' , '6' ],
            ['not' , 'done', 'yet', '5' ]
        ]
    )
);