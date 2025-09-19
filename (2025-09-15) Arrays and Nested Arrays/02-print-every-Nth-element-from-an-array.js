function printNthElementOfArr (arr, step) {
    return arr.filter((el, idx) => idx % step === 0);
}

// Alternative solution
// --------------------

// function printNthElementOfArr (arr, step) {
//     let nthElementsArr = [];

//     for (let i = 0; i < arr.length; i += step) {
//         nthElementsArr.push(arr[i]);
//     }

//     return nthElementsArr;
// }

console.log(printNthElementOfArr(
    ['5', '20', '31', '4', '20'],
    2
));

console.log(printNthElementOfArr(
    ['dsa', 'asd', 'test', 'tset'],
    2
));

console.log(printNthElementOfArr(
    ['1', '2', '3', '4', '5'],
    6
));