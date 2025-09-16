function aggregateElements (numsArr) {
    function sumNums (numsArr) {
        let sum = 0;
        numsArr.forEach(num => sum += num);
        return sum;
    }

    function sunInverseNums (numsArr) {
        let sum = 0;
        numsArr.forEach(num => sum += 1 / num);
        return sum;
    }

    function concatenateNums (numsArr) {
        return numsArr.map(String).join('');
    }

    console.log(sumNums(numsArr));
    console.log(sunInverseNums(numsArr));
    console.log(concatenateNums(numsArr));
}

aggregateElements([1, 2, 3]);
aggregateElements([2, 4, 8, 16]);