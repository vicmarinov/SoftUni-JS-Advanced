function checkForSameDigits (num) {
    let digitsArr = num
        .toString()
        .split('')
        .map(Number);
    
    let areAllDigitsSame = true;
    let sumOfDigits = 0;

    for (let digit of digitsArr) {
        sumOfDigits += digit;
        if (digit !== digitsArr[0]) areAllDigitsSame = false;
    }

    console.log(areAllDigitsSame);
    console.log(sumOfDigits);
}

checkForSameDigits(2222222);
checkForSameDigits(1234);