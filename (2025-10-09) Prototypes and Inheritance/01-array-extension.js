(function solve () {
    Array.prototype.last = function () {
        return this[this.length - 1];
    }

    Array.prototype.skip = function (n) {
        return this.slice(n);
    }

    Array.prototype.take = function (n) {
        return this.slice(0, n);
    }

    Array.prototype.sum = function () {
        return this.reduce((sum, value) => sum + value);
    }

    Array.prototype.average = function () {
        return this.sum() / this.length;
    }
})();

const myArr = [0, 1, 2, 3, 4, 5];
console.log(myArr.last());    // 1
console.log(myArr.skip(3));   // [3, 4, 5]
console.log(myArr.take(3));   // [0, 1, 2]
console.log(myArr.sum());     // 15
console.log(myArr.average()); // 2.5