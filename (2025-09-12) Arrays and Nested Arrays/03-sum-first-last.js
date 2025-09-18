function sumFirstLastNumOfArr (array) {
    return Number(array[0]) + Number(array[array.length - 1]);
}

console.log(sumFirstLastNumOfArr(['20', '30', '40']));
console.log(sumFirstLastNumOfArr(['5', '10']));