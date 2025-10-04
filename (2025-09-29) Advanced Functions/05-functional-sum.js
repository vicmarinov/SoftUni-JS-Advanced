function add (num) {
    let sum = num;

    const result = function (num) {
        sum += num;
        return result;
    }

    result.toString = () => sum;

    return result;
}

console.log(add(1).toString());
console.log(add(1)(6)(-3).toString());