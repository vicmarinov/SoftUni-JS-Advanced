function printSpiralMatrix (width, height) {
    let matrix = [];
    for (let y = 0; y < height; y++) {
        matrix.push([]);

        for (let x = 0; x < width; x++) {
            matrix[y][x] = null;
        }
    }

    let num = 1;
    let x = 0, y = 0;

    while (matrix.flat().filter(cell => cell === null).length > 0) {
        while (x < width && matrix[y][x] === null) {
            matrix[y][x] = num++;
            if (x + 1 < width && matrix[y][x + 1] === null) x++;
        }

        if (y + 1 < height && matrix[y + 1][x] === null) y++;

        while (y < height && matrix[y][x] === null) {
            matrix[y][x] = num++;
            if (y + 1 < height && matrix[y + 1][x] === null) y++;
        }

        if (x - 1 >= 0 && matrix[y][x - 1] === null) x--;

        while (x >= 0 && matrix[y][x] === null) {
            matrix[y][x] = num++;
            if (x - 1 >= 0 && matrix[y][x - 1] === null) x--;
        }

        if (y - 1 >= 0 && matrix[y - 1][x] === null) y--;

        while (y >= 0 && matrix[y][x] === null) {
            matrix[y][x] = num++;
            if (y - 1 >= 0 && matrix[y - 1][x] === null) y--;
        }

        if (x + 1 < width && matrix[y][x + 1] === null) x++;
    }

    // console.table(matrix);
    matrix.forEach(row => console.log(row.join(' ')));
}

// Alternative solution
// --------------------

// function printSpiralMatrix (width, height) {
//     let matrix = [];
//     for (let y = 0; y < height; y++) {
//         matrix.push([]);
//     }

//     let num = 1;
//     let x = 0, y = 0;

//     while (num <= width * height) {
//         while (x < width && matrix[y][x] === undefined) {
//             matrix[y][x] = num++;
//             if (x + 1 < width && matrix[y][x + 1] === undefined) x++;
//         }

//         if (y + 1 < height && matrix[y + 1][x] === undefined) y++;

//         while (y < height && matrix[y][x] === undefined) {
//             matrix[y][x] = num++;
//             if (y + 1 < height && matrix[y + 1][x] === undefined) y++;
//         }

//         if (x - 1 >= 0 && matrix[y][x - 1] === undefined) x--;

//         while (x >= 0 && matrix[y][x] === undefined) {
//             matrix[y][x] = num++;
//             if (x - 1 >= 0 && matrix[y][x - 1] === undefined) x--;
//         }

//         if (y - 1 >= 0 && matrix[y - 1][x] === undefined) y--;

//         while (y >= 0 && matrix[y][x] === undefined) {
//             matrix[y][x] = num++;
//             if (y - 1 >= 0 && matrix[y - 1][x] === undefined) y--;
//         }

//         if (x + 1 < width && matrix[y][x + 1] === undefined) x++;
//     }

//     // console.table(matrix);
//     matrix.forEach(row => console.log(row.join(' ')));
// }

// Alternative solution
// --------------------

// function printSpiralMatrix (width, height) {
//     let matrix = [];
//     for (let y = 0; y < height; y++) {
//         matrix.push([]);
//     }

//     let num = 1;
//     let x = 0, y = 0;

//     while (num <= width * height) {
//         while (x < width && !matrix[y][x]) {
//             matrix[y][x] = num++;
//             if (x + 1 < width && !matrix[y][x + 1]) x++;
//         }

//         if (y + 1 < height && !matrix[y + 1][x]) y++;

//         while (y < height && !matrix[y][x]) {
//             matrix[y][x] = num++;
//             if (y + 1 < height && !matrix[y + 1][x]) y++;
//         }

//         if (x - 1 >= 0 && !matrix[y][x - 1]) x--;

//         while (x >= 0 && !matrix[y][x]) {
//             matrix[y][x] = num++;
//             if (x - 1 >= 0 && !matrix[y][x - 1]) x--;
//         }

//         if (y - 1 >= 0 && !matrix[y - 1][x]) y--;

//         while (y >= 0 && !matrix[y][x]) {
//             matrix[y][x] = num++;
//             if (y - 1 >= 0 && !matrix[y - 1][x]) y--;
//         }

//         if (x + 1 < width && !matrix[y][x + 1]) x++;
//     }

//     // console.table(matrix);
//     matrix.forEach(row => console.log(row.join(' ')));
// }

printSpiralMatrix(5, 5);
printSpiralMatrix(3, 3);