function printSmallestTwoNums (numsArr) {
    let result = numsArr
        .slice()
        .sort((a, b) => a - b)
        .slice(0, 2);
    
    console.log(...result);
}

printSmallestTwoNums([30, 15, 50, 5]);
printSmallestTwoNums([3, 0, 10, 4, 7, 3]);