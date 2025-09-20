function extractIncreasingSubsequence (numsArr) {
    return numsArr.reduce(
        (sequence, num) => sequence.length === 0 || sequence[sequence.length - 1] <= num ? [...sequence, num] : sequence,
        []
    );
}

// Alternative solution
// --------------------

// function extractIncreasingSubsequence (numsArr) {
//     let subsequenceArr = [];
//     let maxNum = numsArr[0];

//     for (let num of numsArr) {
//         if (num >= maxNum) {
//             subsequenceArr.push(num);
//             maxNum = num;
//         }
//     }

//     return subsequenceArr;
// }

console.log(extractIncreasingSubsequence([1, 3, 8, 4, 10, 12, 3, 2, 24]));
console.log(extractIncreasingSubsequence([1, 2, 3, 4]));
console.log(extractIncreasingSubsequence([20, 3, 2, 15, 6, 1]));