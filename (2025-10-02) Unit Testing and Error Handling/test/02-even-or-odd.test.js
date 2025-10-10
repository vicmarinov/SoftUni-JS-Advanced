import { expect } from 'chai';
import { isOddOrEven } from '../Resources from SoftUni/02-even-or-odd.js';

describe('Test isOddOrEven(string)', () => {
    it('Returns "even" when a string with an even length is given as an argument', () => {
        expect(isOddOrEven('')).to.equal('even');
        expect(isOddOrEven('text')).to.equal('even');
        expect(isOddOrEven('A short text')).to.equal('even');
    });

    it('Returns "odd" when a string with an odd length is given as an argument', () => {
        expect(isOddOrEven('a')).to.equal('odd');
        expect(isOddOrEven('txt')).to.equal('odd');
        expect(isOddOrEven('Some text')).to.equal('odd');
    });

    it('Ignores all extra added arguments', () => {
        expect(isOddOrEven('', 'abc')).to.equal('even');
        expect(isOddOrEven('London', 'Paris')).to.equal('even');
        expect(isOddOrEven('New York', 'San Francisco')).to.equal('even');

        expect(isOddOrEven('a', 'abcd')).to.equal('odd');
        expect(isOddOrEven('Barcelona', 'Berlin')).to.equal('odd');
        expect(isOddOrEven('San Diego', 'San Bernardino')).to.equal('odd');
    });

    it('Returns `undefined` when has an array as an argument', () => {
        expect(isOddOrEven([])).to.be.undefined;
        expect(isOddOrEven(['text'])).to.be.undefined;
        expect(isOddOrEven(['some', 'text'])).to.be.undefined;
    });

    it('Returns `undefined` when has an object as an argument', () => {
        expect(isOddOrEven({})).to.be.undefined;
        expect(isOddOrEven({a: 'text'})).to.be.undefined;
        expect(isOddOrEven({a: 'some', b: 'text'})).to.be.undefined;
    });

    it('Returns `undefined` when has a number as an argument', () => {
        expect(isOddOrEven(0)).to.be.undefined;
        expect(isOddOrEven(123)).to.be.undefined;
    });

    it('Returns `undefined` when has a boolean as an argument', () => {
        expect(isOddOrEven(true)).to.be.undefined;
        expect(isOddOrEven(false)).to.be.undefined;
    });
});