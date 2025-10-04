function getSortedArray (numbersArray, orderOfSorting) {
    const comparingFunctions = {
        asc: (a, b) => a - b,
        desc: (a, b) => b - a
    };

    return numbersArray
        .slice()
        .sort(comparingFunctions[orderOfSorting]);
}

console.log(getSortedArray([14, 7, 17, 6, 8], 'asc'));
console.log(getSortedArray([14, 7, 17, 6, 8], 'desc'));