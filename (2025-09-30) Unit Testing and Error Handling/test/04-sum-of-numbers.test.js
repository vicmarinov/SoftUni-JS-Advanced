import { expect } from 'chai';
import { sum } from '../Resources from SoftUni/04-sum-of-numbers.js';

describe('Test sum(arr)', () => {
    it('Finds the sum of an empty array', () => {
        expect(sum([])).to.equal(0);
    });

    it('Finds the sum of an array of 1 number', () => {
        expect(sum([4])).to.equal(4);
    });
    
    it('Finds the sum of an array of several numbers', () => {
        expect(sum([4, 6, 2, -1, 6, 0, 3])).to.equal(20);
    });

    it('Returns `NaN` when a string is given as an argument', () => {
        expect(sum('some text')).to.be.NaN;
    });
});