import { expect } from 'chai';
import { createCalculator } from '../07-add-or-subtract.js';

describe('Test the returned value of createCalculator()', () => {
    const calculator = createCalculator();

    it('Returns an object', () => {
        expect(calculator).to.be.an('object');
    });

    it('Has method add()', () => {
        expect(calculator.hasOwnProperty('add')).to.be.ok;
        expect(calculator.add).to.be.a('function');
    });

    it('Has method subtract()', () => {
        expect(calculator.hasOwnProperty('subtract')).to.be.ok;
        expect(calculator.subtract).to.be.a('function');
    });

    it('Has method get()', () => {
        expect(calculator.hasOwnProperty('get')).to.be.ok;
        expect(calculator.get).to.be.a('function');
    });

    it('Prevents accessing the internal sum from outside', () => {
        const keys = Object.keys(calculator);

        expect(keys.length).to.equal(3);
        expect(keys).contain('add');
        expect(keys).contain('subtract');
        expect(keys).contain('get');
    });
});

describe('Test the add() method', () => {
    it('Works with a number passed as an argument', () => {
        const calculator = createCalculator();

        expect(calculator.get()).to.equal(0);

        calculator.add(3);
        expect(calculator.get()).to.equal(3);

        calculator.add(4);
        expect(calculator.get()).to.equal(7);
        
        calculator.add(13);
        expect(calculator.get()).to.equal(20);

        calculator.add(0);
        expect(calculator.get()).to.equal(20);
        
        calculator.add(-10);
        expect(calculator.get()).to.equal(10);
        
        calculator.add(0.5);
        expect(calculator.get()).to.equal(10.5);

        calculator.add(-1.5);
        expect(calculator.get()).to.equal(9);
    });

    it('Works also with strings containing numbers', () => {
        const calculator = createCalculator();

        expect(calculator.get()).to.equal(0);

        calculator.add('1');
        expect(calculator.get()).to.equal(1);

        // To make sure it works both with numbers
        // and strings containing numbers:
        calculator.add(2);
        expect(calculator.get()).to.equal(3);
        
        calculator.add('7');
        expect(calculator.get()).to.equal(10);

        calculator.add('30');
        expect(calculator.get()).to.equal(40);
        
        calculator.add('0');
        expect(calculator.get()).to.equal(40);

        calculator.add('-20');
        expect(calculator.get()).to.equal(20);

        calculator.add('1.5');
        expect(calculator.get()).to.equal(21.5);

        calculator.add('-0.75');
        expect(calculator.get()).to.equal(20.75);
    });

    it('Does not work with strings not containing numbers', () => {
        const calculator = createCalculator();

        expect(calculator.get()).to.equal(0);

        calculator.add('text');
        expect(calculator.get()).to.be.NaN;
    });

    it('Does not work with arrays', () => {
        const calculator = createCalculator();

        expect(calculator.get()).to.equal(0);

        calculator.add([1, 2, 3]);
        expect(calculator.get()).to.be.NaN;
    });

    it('Does not work with objects', () => {
        const calculator = createCalculator();

        expect(calculator.get()).to.equal(0);

        calculator.add({a: 1, b: 2});
        expect(calculator.get()).to.be.NaN;
    });
});

describe('Test the subtract() method', () => {
    it('Works with a number passed as an argument', () => {
        const calculator = createCalculator();

        expect(calculator.get()).to.equal(0);

        calculator.subtract(3);
        expect(calculator.get()).to.equal(-3);

        calculator.subtract(4);
        expect(calculator.get()).to.equal(-7);
        
        calculator.subtract(13);
        expect(calculator.get()).to.equal(-20);

        calculator.subtract(0);
        expect(calculator.get()).to.equal(-20);
        
        calculator.subtract(-10);
        expect(calculator.get()).to.equal(-10);
        
        calculator.subtract(0.5);
        expect(calculator.get()).to.equal(-10.5);

        calculator.subtract(-1.5);
        expect(calculator.get()).to.equal(-9);

        calculator.subtract(-10);
        expect(calculator.get()).to.equal(1);
    });

    it('Works also with strings containing numbers', () => {
        const calculator = createCalculator();

        expect(calculator.get()).to.equal(0);

        calculator.subtract('1');
        expect(calculator.get()).to.equal(-1);

        // To make sure it works both with numbers
        // and strings containing numbers:
        calculator.subtract(2);
        expect(calculator.get()).to.equal(-3);
        
        calculator.subtract('7');
        expect(calculator.get()).to.equal(-10);

        calculator.subtract('30');
        expect(calculator.get()).to.equal(-40);
        
        calculator.subtract('0');
        expect(calculator.get()).to.equal(-40);

        calculator.subtract('-20');
        expect(calculator.get()).to.equal(-20);

        calculator.subtract('1.5');
        expect(calculator.get()).to.equal(-21.5);

        calculator.subtract('-0.75');
        expect(calculator.get()).to.equal(-20.75);

        calculator.subtract('-20.75');
        expect(calculator.get()).to.equal(0);
        calculator.subtract('-100');
        expect(calculator.get()).to.equal(100);
    });

    it('Does not work with strings not containing numbers', () => {
        const calculator = createCalculator();

        expect(calculator.get()).to.equal(0);

        calculator.subtract('text');
        expect(calculator.get()).to.be.NaN;
    });

    it('Does not work with arrays', () => {
        const calculator = createCalculator();

        expect(calculator.get()).to.equal(0);

        calculator.subtract([1, 2, 3]);
        expect(calculator.get()).to.be.NaN;
    });

    it('Does not work with objects', () => {
        const calculator = createCalculator();

        expect(calculator.get()).to.equal(0);

        calculator.subtract({a: 1, b: 2});
        expect(calculator.get()).to.be.NaN;
    });
});

describe('Test the get() method', () => {
    const calculator = createCalculator();

    it('Returns 0 when no manipulations were done', () => {
        expect(calculator.get()).to.equal(0);
    });

    it('Returns a correct number when only correct manipulations were done', () => {
        calculator.add(30);
        calculator.subtract(10);
        calculator.add('15');
        calculator.subtract('5');
        calculator.add(-100);
        calculator.subtract(-50);

        expect(calculator.get()).to.equal(-20);
    });
});