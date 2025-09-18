function getBiggerHalf (numsArr) {
    let biggerHalf = numsArr
        .slice()
        .sort((a, b) => a - b)
        .slice(Math.floor(numsArr.length / 2));
    
    return biggerHalf;
}

console.log(getBiggerHalf([4, 7, 2, 5]));
console.log(getBiggerHalf([3, 19, 14, 7, 2, 19, 6]));