import { expect } from 'chai';
import { StringBuilder } from '../Resources from Softuni/06-string-builder.js';

describe('Test the StringBuilder class', () => {
    it('Has `StringBuilder` as an identifier name', () => {
        expect(StringBuilder.name).to.equal('StringBuilder');
    });

    it('Is a `class` by type and can have instances', () => {
        const instance = new StringBuilder();
        expect(instance).to.be.instanceOf(StringBuilder);
    });

    it('Has the all methods, that are required', () => {
        const instance = new StringBuilder();

        expect(StringBuilder.constructor).to.be.a('function');
        expect(instance.append).to.be.a('function');
        expect(instance.prepend).to.be.a('function');
        expect(instance.insertAt).to.be.a('function');
        expect(instance.remove).to.be.a('function');
        expect(StringBuilder._vrfyParam).to.be.a('function');
        expect(instance.toString).to.be.a('function');
    });

    it('Has the all properties, that are required', () => {
        const instance = new StringBuilder();
        expect(instance._stringArray).to.exist;
    });

    describe('Test the constructor(string) method', () => {
        it('Makes a correct instance when is invocated without any parameters', () => {
            const instance = new StringBuilder();
            expect(instance._stringArray).to.deep.equal([]);
        });
        
        it('Makes a correct instance when is invocated with a correct parameter', () => {
            const instance = new StringBuilder('some text');
            expect(instance._stringArray).to.deep.equal(['s', 'o', 'm', 'e', ' ', 't', 'e', 'x', 't']);
        });

        it('Throws an error when is invocated with an incorrect parameter', () => {
            expect(() => new StringBuilder(4)).to.throw('Argument must be a string');
            expect(() => new StringBuilder(['a string in an array'])).to.throw('Argument must be a string');
            expect(() => new StringBuilder({str: 'some text '})).to.throw('Argument must be a string');
        });
    });

    describe('Test the append(string) method', () => {
        it('Returns a correct result when has a correct parameter', () => {
            const instance1 = new StringBuilder();
            
            instance1.append('some')
            expect(instance1._stringArray).to.deep.equal(['s', 'o', 'm', 'e']);

            instance1.append(' ');
            expect(instance1._stringArray).to.deep.equal(['s', 'o', 'm', 'e', ' ']);
            
            instance1.append('text');
            expect(instance1._stringArray).to.deep.equal(['s', 'o', 'm', 'e', ' ', 't', 'e', 'x', 't']);

            
            const instance2 = new StringBuilder('another');

            instance2.append(' ')
            expect(instance2._stringArray).to.deep.equal(['a', 'n', 'o', 't', 'h', 'e', 'r', ' ']);

            instance2.append('text')
            expect(instance2._stringArray).to.deep.equal(['a', 'n', 'o', 't', 'h', 'e', 'r', ' ', 't', 'e', 'x', 't']);
        });

        it('Throws an error when is invocated with an incorrect parameter', () => {
            const instance = new StringBuilder('some');
            
            expect(() => instance.append(4)).to.throw('Argument must be a string');
            expect(() => instance.append(['more', 'text'])).to.throw('Argument must be a string');
            expect(() => instance.append({'1': 'more', '2': 'text'})).to.throw('Argument must be a string');
            expect(() => instance.append()).to.throw('Argument must be a string');
            expect(() => instance.append(null)).to.throw('Argument must be a string');
        });
    });

    describe('Test the prepend(string) method', () => {
        it('Returns a correct result when has a correct parameter', () => {
            const instance1 = new StringBuilder();
            
            instance1.prepend('USA')
            expect(instance1._stringArray).to.deep.equal(['U', 'S', 'A']);

            instance1.prepend(' ');
            expect(instance1._stringArray).to.deep.equal([' ', 'U', 'S', 'A']);
            
            instance1.prepend('the');
            expect(instance1._stringArray).to.deep.equal(['t', 'h', 'e', ' ', 'U', 'S', 'A']);

            
            const instance2 = new StringBuilder('UK');

            instance2.prepend(' ')
            expect(instance2._stringArray).to.deep.equal([' ', 'U', 'K']);

            instance2.prepend('the')
            expect(instance2._stringArray).to.deep.equal(['t', 'h', 'e', ' ', 'U', 'K']);
        });

        it('Throws an error when is invocated with an incorrect parameter', () => {
            const instance = new StringBuilder('some');
            
            expect(() => instance.prepend(4)).to.throw('Argument must be a string');
            expect(() => instance.prepend(['more', 'text'])).to.throw('Argument must be a string');
            expect(() => instance.prepend({'1': 'more', '2': 'text'})).to.throw('Argument must be a string');
            expect(() => instance.prepend()).to.throw('Argument must be a string');
            expect(() => instance.prepend(null)).to.throw('Argument must be a string');
        });
    });

    describe('Test the insertAt(string, startIndex) method', () => {
        it('Returns a correct result when has correct parameters', () => {
            const instance = new StringBuilder('Mr Doe');
            
            instance.insertAt('.', 2)
            expect(instance._stringArray).to.deep.equal(['M', 'r', '.', ' ', 'D', 'o', 'e']);
        });

        it('Throws an error when is invocated with an incorrect parameter', () => {
            const instance1 = new StringBuilder('Mrs Doe');
            
            expect(() => instance1.insertAt(4, 4)).to.throw('Argument must be a string');
            expect(() => instance1.insertAt(['.', 4])).to.throw('Argument must be a string');
            expect(() => instance1.insertAt({string: '.', startIndex: '4'})).to.throw('Argument must be a string');
            expect(() => instance1.insertAt()).to.throw('Argument must be a string');
            expect(() => instance1.insertAt(null)).to.throw('Argument must be a string');

            expect(() => instance1.insertAt('.', '4')).to.throw;
            expect(() => instance1.insertAt('.', [4])).to.throw;
            expect(() => instance1.insertAt('.', {startIndex: 4})).to.throw;
            expect(() => instance1.insertAt('.', null)).to.throw;
            expect(() => instance1.insertAt('.')).to.throw; // the same as instance1.insertAt('.', undefined)
        });
    });

    describe('Test the remove(startIndex, length) method', () => {
        it('Returns a correct result when has correct parameters', () => {
            const instance = new StringBuilder('Mr. John Doe from Sacramento');
            
            instance.remove(12, 16)
            expect(instance._stringArray).to.deep.equal(['M', 'r', '.', ' ', 'J', 'o', 'h', 'n', ' ', 'D', 'o', 'e']);
            
            instance.remove(2, 1)
            expect(instance._stringArray).to.deep.equal(['M', 'r', ' ', 'J', 'o', 'h', 'n', ' ', 'D', 'o', 'e']);
            
            instance.remove(3, 5)
            expect(instance._stringArray).to.deep.equal(['M', 'r', ' ', 'D', 'o', 'e']);
        });

        it('Returns a correct result when has parameters that are out of bounds or are not defined', () => {
            const instance1 = new StringBuilder('0123456');
            instance1.remove(2);
            expect(instance1.toString()).to.equal('0123456'); // makes nothing

            const instance2 = new StringBuilder('0123456');
            instance2.remove(undefined, 3);
            expect(instance2.toString()).to.equal('3456'); // removes the first 3 chars

            const instance3 = new StringBuilder('0123456');
            instance3.remove(-2, 3);
            expect(instance3.toString()).to.equal('01234'); // removes 3 chars from the second char from the end of the string

            const instance4 = new StringBuilder('0123456');
            instance4.remove(2, 100);
            expect(instance4.toString()).to.equal('01'); // removes everything from the char with index 2

            const instance5 = new StringBuilder('0123456');
            instance5.remove(2, -1);
            expect(instance5.toString()).to.equal('0123456'); // makes nothing

            const instance6 = new StringBuilder('0123456');
            instance6.remove(2, 0);
            expect(instance6.toString()).to.equal('0123456'); // makes nothing
        });

        it('Throws an error when has parameters with an incorrect type', () => {
            const instance = new StringBuilder('Mr John Doe');
            
            expect(() => instance.remove('3', '5')).to.throw;
            expect(() => instance.remove(3, '5')).to.throw;
            expect(() => instance.remove('3', 5)).to.throw;

            expect(() => instance.remove([3, 5])).to.throw;
            expect(() => instance.remove([3], 5)).to.throw;
            expect(() => instance.remove(3, [5])).to.throw;

            expect(() => instance.remove({startIndex: 3, length: 5})).to.throw;
            expect(() => instance.remove(3, {length: 5})).to.throw;
            expect(() => instance.remove({startIndex: 3}, 5)).to.throw;
        });
    });

    describe('Test the toString() method', () => {
        it('Returns a correct result when ._stringArray is NOT an empty array', () => {
            const instance = new StringBuilder('Mr. John Doe from Sacramento');
            expect(instance.toString()).to.equal('Mr. John Doe from Sacramento')
        });

        it('Returns a correct result when ._stringArray is an empty array', () => {
            const instance = new StringBuilder();
            expect(instance.toString()).to.equal('')
        });
    });

    describe('Test the _vrfyParam(string) method', () => {
        it('Does not throw an error when has a string as an argument', () => {
            expect(StringBuilder._vrfyParam('some text')).not.to.throw;
            expect(StringBuilder._vrfyParam('')).not.to.throw;
        });

        it('Throws a correct error when its argument is NOT a string', () => {
            expect(() => StringBuilder._vrfyParam(2)).to.throw('Argument must be a string');
            expect(() => StringBuilder._vrfyParam([])).to.throw('Argument must be a string');
            expect(() => StringBuilder._vrfyParam([1, 2])).to.throw('Argument must be a string');
            expect(() => StringBuilder._vrfyParam({})).to.throw('Argument must be a string');
            expect(() => StringBuilder._vrfyParam({'1': 2, '3': 4})).to.throw('Argument must be a string');
            expect(() => StringBuilder._vrfyParam(null)).to.throw('Argument must be a string');
            expect(() => StringBuilder._vrfyParam()).to.throw('Argument must be a string');
            expect(() => StringBuilder._vrfyParam(undefined)).to.throw('Argument must be a string');
        });
    });
});