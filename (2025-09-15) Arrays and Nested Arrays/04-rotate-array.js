function rotateArray (arr, rotations) {
    rotations %= arr.length; // removing unneeded rotations

    console.log(...arr.slice(arr.length - rotations),
                ...arr.slice(0, arr.length - rotations));
}

// Alternative solution
// --------------------

// function rotateArray (arr, rotations) {
//     rotations %= arr.length; // removing unneeded rotations

//     let rotatedArr = arr.slice();

//     for (let i = 0; i < rotations; i++) {
//         rotatedArr.unshift(rotatedArr.pop());
//     }

//     console.log(...rotatedArr);
// }

rotateArray(
    ['1', '2', '3', '4'],
    2
);

rotateArray(
    ['Banana', 'Orange', 'Coconut', 'Apple'],
    15
);