import { expect } from 'chai';
import { mathEnforcer } from '../Resources from SoftUni/04-math-enforcer.js';

describe('Test the mathEnforcer object', () => {
    it('Make sure that mathEnforcer is an object', () => {
        expect(mathEnforcer).to.be.an('object');
    });

    it('Make sure that it has the addFive(num) method', () => {
        expect(mathEnforcer.addFive).to.be.a('function');
    });

    it('Make sure that it has the subtractTen(num) method', () => {
        expect(mathEnforcer.subtractTen).to.be.a('function');
    });

    it('Make sure that it has the sum(num1, num2) method', () => {
        expect(mathEnforcer.sum).to.be.a('function');
    });

    it('Make sure that it has only that 3 methods', () => {
        expect(Object.keys(mathEnforcer).length).to.equal(3);
    });
});

describe('Test the mathEnforcer.addFive(num) method', () => {
    it('Returns a correct result when a correct type of the argument is given', () => {
        expect(mathEnforcer.addFive(3)).to.be.closeTo(8, 0.01);
        expect(mathEnforcer.addFive(0)).to.be.closeTo(5, 0.01);
        expect(mathEnforcer.addFive(-100)).to.be.closeTo(-95, 0.01);

        expect(mathEnforcer.addFive( 0.3)).to.be.closeTo(5.3, 0.01);
        expect(mathEnforcer.addFive(-0.1)).to.be.closeTo(4.9, 0.01);
    });

    it('Returns `undefined` when has an incorrect type of the argument', () => {
        expect(mathEnforcer.addFive('3')).to.be.undefined;
        expect(mathEnforcer.addFive([3])).to.be.undefined;
        expect(mathEnforcer.addFive({num: 3})).to.be.undefined;
        expect(mathEnforcer.addFive(function (x) { return 3; })).to.be.undefined;
        expect(mathEnforcer.addFive()).to.be.undefined; // mathEnforcer.addFive(undefined)
        expect(mathEnforcer.addFive(null)).to.be.undefined;
    });
});

describe('Test the mathEnforcer.subtractTen(num) method', () => {
    it('Returns a correct result when a correct type of the argument is given', () => {
        expect(mathEnforcer.subtractTen( 40)).to.be.closeTo(  30, 0.01);
        expect(mathEnforcer.subtractTen(  0)).to.be.closeTo( -10, 0.01);
        expect(mathEnforcer.subtractTen(-90)).to.be.closeTo(-100, 0.01);

        expect(mathEnforcer.subtractTen( 0.4)).to.be.closeTo( -9.6, 0.01);
        expect(mathEnforcer.subtractTen(-0.9)).to.be.closeTo(-10.9, 0.01);
    });

    it('Returns `undefined` when has an incorrect type of the argument', () => {
        expect(mathEnforcer.subtractTen('56')).to.be.undefined;
        expect(mathEnforcer.subtractTen([34])).to.be.undefined;
        expect(mathEnforcer.subtractTen({num: 76})).to.be.undefined;
        expect(mathEnforcer.subtractTen(function (x) { return 103; })).to.be.undefined;
        expect(mathEnforcer.subtractTen()).to.be.undefined; // mathEnforcer.subtractTen(undefined)
        expect(mathEnforcer.subtractTen(null)).to.be.undefined;
    });
});

describe('Test the mathEnforcer.sum(num1, num2) method', () => {
    it('Returns a correct result when a correct type of the argument is given', () => {
        // (+, +) (+, -) (-, +) (-, -) (0, +) (0, -) (+, 0) (-, 0) (0, 0)

        expect(mathEnforcer.sum(  40,  10)).to.be.closeTo(  50, 0.01);
        expect(mathEnforcer.sum(  30, -20)).to.be.closeTo(  10, 0.01);
        expect(mathEnforcer.sum( -60, 100)).to.be.closeTo(  40, 0.01);
        expect(mathEnforcer.sum( -60, -90)).to.be.closeTo(-150, 0.01);
        expect(mathEnforcer.sum(   0,  70)).to.be.closeTo(  70, 0.01);
        expect(mathEnforcer.sum(   0, -80)).to.be.closeTo( -80, 0.01);
        expect(mathEnforcer.sum(  90,   0)).to.be.closeTo(  90, 0.01);
        expect(mathEnforcer.sum(-140,   0)).to.be.closeTo(-140, 0.01);
        expect(mathEnforcer.sum(   0,   0)).to.be.closeTo(   0, 0.01);

        expect(mathEnforcer.sum( 0.40,  0.10)).to.be.closeTo( 0.5, 0.01);
        expect(mathEnforcer.sum( 0.30, -0.20)).to.be.closeTo( 0.1, 0.01);
        expect(mathEnforcer.sum(-0.60,  1.00)).to.be.closeTo( 0.4, 0.01);
        expect(mathEnforcer.sum(-0.60, -0.90)).to.be.closeTo(-1.5, 0.01);
        expect(mathEnforcer.sum( 0.00,  0.70)).to.be.closeTo( 0.7, 0.01);
        expect(mathEnforcer.sum( 0.00, -0.80)).to.be.closeTo(-0.8, 0.01);
        expect(mathEnforcer.sum( 0.90,  0.00)).to.be.closeTo( 0.9, 0.01);
        expect(mathEnforcer.sum(-1.40,  0.00)).to.be.closeTo(-1.4, 0.01);
    });

    it('Returns `undefined` when has an incorrect type of the argument', () => {
        expect(mathEnforcer.sum('1', 2)).to.be.undefined;
        expect(mathEnforcer.sum(3, '4')).to.be.undefined;

        expect(mathEnforcer.sum([5, 6], 7)).to.be.undefined;
        expect(mathEnforcer.sum(8, [9, 10])).to.be.undefined;

        expect(mathEnforcer.sum({a: 11, b: 12}, 13)).to.be.undefined;
        expect(mathEnforcer.sum(14, {c: 15, d: 16})).to.be.undefined;

        expect(mathEnforcer.sum(x => 17, 18)).to.be.undefined;
        expect(mathEnforcer.sum(19, x => 20)).to.be.undefined;
    });
});