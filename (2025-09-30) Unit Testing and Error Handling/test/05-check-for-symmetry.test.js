import { expect } from 'chai';
import { isSymmetric } from '../Resources from SoftUni/05-check-for-symmetry.js';

describe('Test isSymmetric(arr)', () => {
    it('Returns `true` for a symmetric array', () => {
        expect(isSymmetric([4, 2, 6, 23, 23, 6, 2, 4])).to.be.ok;
        expect(isSymmetric([4, 2, 6, 23, 6, 2, 4])).to.be.ok;
        expect(isSymmetric([2])).to.be.ok;
        expect(isSymmetric(['2', '2'])).to.be.ok;
        expect(isSymmetric(["2", '2'])).to.be.ok;
        expect(isSymmetric([x => 2 * x, x => 2 * x])).to.be.ok;
        expect(isSymmetric([[1, 2], [1, 2]])).to.be.ok;
        expect(isSymmetric([{a: 1, b: 2}, {a: 1, b: 2}])).to.be.ok;
    });
    
    it('Returns `true` for an empty array', () => {
        expect(isSymmetric([])).to.be.ok;
    });

    it('Returns `false` for a non-symmetric array', () => {
        expect(isSymmetric([9, 0, 3, 5, 2])).to.be.not.ok;
        expect(isSymmetric([9, 0, 3, 2])).to.be.not.ok;
        expect(isSymmetric([2, 1])).to.be.not.ok;
        expect(isSymmetric(['2', 1])).to.be.not.ok;
        expect(isSymmetric(['2', x => console.log(a)])).to.be.not.ok;
    });

    it('Returns `false` when has a string as an argument', () => {
        expect(isSymmetric('some text')).to.be.not.ok;
        expect(isSymmetric('text')).to.be.not.ok;
        expect(isSymmetric('txxt')).to.be.not.ok;
        expect(isSymmetric('txt')).to.be.not.ok;
        expect(isSymmetric('')).to.be.not.ok;
    });

    it('Returns `false` when has a number as an argument', () => {
        expect(isSymmetric(1234)).to.be.not.ok;
        expect(isSymmetric(123)).to.be.not.ok;
        expect(isSymmetric(1221)).to.be.not.ok;
        expect(isSymmetric(121)).to.be.not.ok;
    });

    it('Returns `false` when has a boolean as an argument', () => {
        expect(isSymmetric(true)).to.be.not.ok;
        expect(isSymmetric(false)).to.be.not.ok;
    });

    it('Returns `false` when has an object as an argument', () => {
        expect(isSymmetric({})).to.be.not.ok;
        expect(isSymmetric({a: 4, b: 3})).to.be.not.ok;
        expect(isSymmetric({a: 4, b: 3, c: 4})).to.be.not.ok;
    });
});