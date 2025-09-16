function findLargestNum (num1, num2, num3) {
    let largestNum = Math.max(num1, num2, num3);
    console.log(`The largest number is ${largestNum}.`);
}

// Alternative solution
// --------------------

// function findLargestNum (num1, num2, num3) {
//     let largestNum = num1;
//     if (num2 > largestNum) largestNum = num2;
//     if (num3 > largestNum) largestNum = num3;

//     console.log(`The largest number is ${largestNum}.`);
// }

findLargestNum(5, -3, 16);
findLargestNum(-3, -5, -22.5);