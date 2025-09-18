function printLastKNumbersSequence (numN, numK) {
    let resultArr = [1];

    for (let i = 1; i < numN; i++) {
        resultArr[i] = resultArr
            .slice(Math.max(i - numK, 0), i)
            .reduce((sum, num) => sum + num, 0);
    }

    return resultArr;
}

console.log(printLastKNumbersSequence(6, 3));
console.log(printLastKNumbersSequence(8, 2));