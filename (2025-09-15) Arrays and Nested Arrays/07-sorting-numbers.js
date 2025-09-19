function sortNumbers (numsArr) {
    let numsArrSortedAscending = numsArr.slice().sort((a, b) => a - b);
    let numsArrSorted = [];

    let i = 0;
    let j = numsArrSortedAscending.length - 1;

    while (numsArrSorted.length < numsArrSortedAscending.length) {
        if (numsArrSorted.length % 2 === 0) {
            numsArrSorted.push(numsArrSortedAscending[i]);
            i++;
        } else {
            numsArrSorted.push(numsArrSortedAscending[j]);
            j--;
        }
    }
    
    return numsArrSorted;
}

console.log(sortNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));
console.log(sortNumbers([22, 9, 63, 3, 2, 19, 54, 11, 21, 18]));