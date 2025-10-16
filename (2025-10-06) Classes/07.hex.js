class Hex {
    _decimalNum;

    constructor (value) {
        this._decimalNum = value;
    }

    valueOf () {
        return this._decimalNum;
    }

    toString() {
        return '0x' + this._decimalNum.toString(16).toUpperCase();
    }

    plus (hexNumber) {
        return new Hex(this._decimalNum + Number(hexNumber));
    }

    minus (hexNumber) {
        return new Hex(this._decimalNum - Number(hexNumber));
    }

    parse (hexNumberAsString) {
        return parseInt(hexNumberAsString, 16);
    }
}

const FF = new Hex(255);
console.log(FF.toString());

console.log(FF.valueOf() + 1 === 256);

const a = new Hex(10);
const b = new Hex(5);

console.log(a.plus(b).toString());
console.log(a.plus(b).toString() === '0xF');

console.log(FF.parse('AAA'));