class LimitedString {
    innerString;
    innerLength;

    constructor (string, length) {
        this.innerString = string;
        this.length = length;
    }

    get length () {
        return this.innerLength;
    }

    set length (value) {
        this.innerLength = value;

        if (this.innerLength < 0) this.innerLength = 0;
    }

    increase (increaseLength) {
        this.length += increaseLength;
    }

    decrease (decreaseLength) {
        this.length -= decreaseLength;
    }

    toString () {
        let result = this.innerString.substring(0, this.length)
        
        if (this.length < this.innerString.length) {
            result += '...';
        }

        return result;
    }
}

const test = new LimitedString('Test', 5);
console.log(test.toString()); // Test

test.decrease(3);
console.log(test.toString()); // Te...

test.decrease(5);
console.log(test.toString()); // ...

test.increase(4); 
console.log(test.toString()); // Test