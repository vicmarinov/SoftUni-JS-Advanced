function createAddToNumber (number) {
    return function (addNumber) {
        return number + addNumber;
    }
}

let add5 = createAddToNumber(5);
console.log(add5(2));
console.log(add5(3));

let add7 = createAddToNumber(7);
console.log(add7(2));
console.log(add7(3));