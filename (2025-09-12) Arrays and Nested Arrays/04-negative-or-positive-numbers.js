function processNegativeOrPositiveNumbers (numsArr) {
    let resultArr = [];

    for (let num of numsArr) {
        if (num >= 0) resultArr.push(num);
        else resultArr.unshift(num);
    }

    console.log(resultArr.join('\n'));
}

processNegativeOrPositiveNumbers([7, -2, 8, 9]);
processNegativeOrPositiveNumbers([3, -2, 0, -1]);