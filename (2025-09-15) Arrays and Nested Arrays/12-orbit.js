function orbit ([width, height, firstY, firstX]) {
    function checkValidityOfCoordinates (x, y) {
        return x >= 0 && x < width  &&
               y >= 0 && y < height &&
               matrix[y][x] === undefined;
    }

    let matrix = [];
    for (let y = 0; y < height; y++) matrix.push([]);

    let xStart = firstX, xEnd = firstX;
    let yStart = firstY, yEnd = firstY;
    let num = 1;

    while (matrix.flat().length < width * height) {
        for (let x = xStart; x <= xEnd; x++) {
            if (checkValidityOfCoordinates(x, yStart)) matrix[yStart][x] = num;
            if (checkValidityOfCoordinates(x, yEnd)) matrix[yEnd][x] = num;
        }

        for (let y = yStart; y <= yEnd; y++) {
            if (checkValidityOfCoordinates(xStart, y)) matrix[y][xStart] = num;
            if (checkValidityOfCoordinates(xEnd, y)) matrix[y][xEnd] = num;
        }

        num++;
        xStart--; xEnd++;
        yStart--; yEnd++;
    }

    // console.table(matrix);
    matrix.forEach(row => console.log(row.join(' ')));
}

orbit([4, 4, 0, 0]);
orbit([5, 5, 2, 2]);
orbit([3, 3, 2, 2]);