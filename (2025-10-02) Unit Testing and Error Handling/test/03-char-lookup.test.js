import { expect } from 'chai';
import { lookupChar } from '../Resources from SoftUni/03-char-lookup.js';

describe('Test lookupChar(string, index)', () => {
    it('Returns a correct result when has valid arguments given', () => {
        expect(lookupChar('Some text', 7)).to.equal('x');
        expect(lookupChar('a', 0)).to.equal('a');
    });

    it('Returns an error message when an empty string is given as an argument', () => {
        expect(lookupChar('', 0)).to.equal('Incorrect index');
        expect(lookupChar('', 1)).to.equal('Incorrect index');
        expect(lookupChar('', -1)).to.equal('Incorrect index');
    });

    it('Returns an error message when the given index is out of the bounds', () => {
        expect(lookupChar('text', -1)).to.equal('Incorrect index');
        expect(lookupChar('txt', 3)).to.equal('Incorrect index');
        expect(lookupChar('Some text', -50)).to.equal('Incorrect index');
        expect(lookupChar('Some more text', 50)).to.equal('Incorrect index');
    });

    it('Returns `undefined` when has invalid types of the arguments', () => {
        expect(lookupChar('abcdefg', 4.5)).to.be.undefined;

        expect(lookupChar(1, 'abc')).to.be.undefined;
        expect(lookupChar(1, 2)).to.be.undefined;
        expect(lookupChar('a', 'b')).to.be.undefined;

        expect(lookupChar(['abc', 'def', 'ghi'], 1)).to.be.undefined;
        expect(lookupChar('abc', [0, 1, 2])).to.be.undefined;

        expect(lookupChar({text1: 'London', text2: 'Paris'}), 3).to.be.undefined;
        expect(lookupChar('New York', {a: 3, b: 4})).to.be.undefined;
        
        expect(lookupChar()).to.be.undefined; // the same as lookupChar(undefined, undefined)
        expect(lookupChar('Berlin')).to.be.undefined; // the same as lookupChar('Berlin', undefined)
        expect(lookupChar(undefined, 4)).to.be.undefined;
    });

    it('Ignores all extra added arguments', () => {
        expect(lookupChar('San Francisco', 8, 100)).to.equal('c');
        expect(lookupChar('San Francisco', 8, 'Los Angeles')).to.equal('c');
    });
});