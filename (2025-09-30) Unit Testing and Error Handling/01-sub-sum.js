function getSubSum (arr, startIdx, endIdx) {
    if (!Array.isArray(arr)) return NaN;

    startIdx = startIdx < 0 ? 0 : startIdx;
    endIdx = endIdx >= arr.length ? arr.length - 1 : endIdx;

    const subArr = arr.slice(startIdx, endIdx + 1);

    let subSum = 0;
    for (const element of subArr) {
        if (typeof element !== 'number') return NaN;
        subSum += element;
    }
    
    return subSum;
}

console.log(getSubSum([10, 20, 30, 40, 50, 60], 3, 300));
console.log(getSubSum([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1));
console.log(getSubSum([10, 'twenty', 30, 40], 0, 2));
console.log(getSubSum([], 1, 2));
console.log(getSubSum('text', 0, 2));