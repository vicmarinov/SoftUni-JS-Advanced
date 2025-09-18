function processOddPositions (numsArr) {
    return numsArr
        .filter((el, idx) => idx % 2 !== 0)
        .map(x => 2 * x)
        .reverse()
        .join(' ');
}

console.log(processOddPositions([10, 15, 20, 25]));
console.log(processOddPositions([3, 0, 10, 4, 7, 3]));