function findGreatestCommonDivisor (num1, num2) {
    let gcd = num1 < num2 ? num1 : num2;

    while (num1 % gcd !== 0 || num2 % gcd !== 0) gcd--;

    console.log(gcd);
}

// Alternative solution
// --------------------

// function findGreatestCommonDivisor (num1, num2) {
//     while (num1 !== 0 && num2 !== 0) {
//         if (num1 > num2) num1 %= num2;
//         else num2 %= num1;
//     }

//     console.log(num1 + num2);
// }

findGreatestCommonDivisor(15, 5);
findGreatestCommonDivisor(2154, 458);