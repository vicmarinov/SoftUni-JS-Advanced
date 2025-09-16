function getSumOfNums (start, end) {
    let startNum = Number(start);
    let endNum = Number(end);

    let sum = 0;
    for (let num = startNum; num <= endNum; num++) sum += num;

    return sum;
}

console.log(getSumOfNums('1', '5'));
console.log(getSumOfNums('-8', '20'));