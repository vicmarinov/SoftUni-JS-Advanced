import { expect } from 'chai';
import { PaymentPackage } from '../Resources from SoftUni/11-payment-package.js';

describe('Test the PaymentPackage class', () => {
    it('Can have instances', () => {
        const instance = new PaymentPackage('some name', 300);
        expect(instance).to.be.instanceOf(PaymentPackage);
    });

    describe('Test the constructor(name, value) method', () => {
        // TODO
    });

    describe('Test the .name getter/setter', () => {
        it('Works correctly with a correct data input', () => {
            const instance = new PaymentPackage('text', 400);
            expect(instance.name).to.equal('text');

            instance.name = 'new name';
            expect(instance.name).to.equal('new name');
        });

        it('Throws a correct error when has a non-string as data input', () => {
            const instance = new PaymentPackage('initial text', 500);

            expect(() => instance.name = 123).to.throw('Name must be a non-empty string');
            expect(() => instance.name = ['some text']).to.throw('Name must be a non-empty string');
            expect(() => instance.name = {text: 'some text'}).to.throw('Name must be a non-empty string');
            expect(() => instance.name = () => 'text').to.throw('Name must be a non-empty string');
        });

        it('Throws a correct error when has a blank string as data input', () => {
            const instance = new PaymentPackage('initial text', 500);
            expect(() => instance.name = '').to.throw('Name must be a non-empty string');
        });
    });

    describe('Test the .value getter/setter', () => {
        it('Works correctly with a correct data input', () => {
            const instance = new PaymentPackage('text', 1234);
            expect(instance.value).to.equal(1234);

            instance.value = 4321;
            expect(instance.value).to.equal(4321);
        });

        it('Throws a correct error when has a non-number as data input', () => {
            const instance = new PaymentPackage('initial text', 500);

            expect(() => instance.value = 'abc').to.throw('Value must be a non-negative number');
            expect(() => instance.value = [123]).to.throw('Value must be a non-negative number');
            expect(() => instance.value = {value: 456}).to.throw('Value must be a non-negative number');
            expect(() => instance.value = () => 789).to.throw('Value must be a non-negative number');
        });

        it('Throws a correct error when has a negative number as data input', () => {
            const instance = new PaymentPackage('initial text', 500);

            expect(() => instance.value = -4).to.throw('Value must be a non-negative number');
            expect(() => instance.value = -12345).to.throw('Value must be a non-negative number');

            expect(() => instance.value = 0).to.not.throw('Value must be a non-negative number');
        });
    });

    describe('Test the .VAT getter/setter', () => {
        it('Works correctly with a correct data input', () => {
            const instance = new PaymentPackage('text', 1234);
            expect(instance.VAT).to.equal(20);

            instance.VAT = 45.67;
            expect(instance.VAT).to.equal(45.67);
        });

        it('Throws a correct error when has a non-number as data input', () => {
            const instance = new PaymentPackage('initial text', 500);

            expect(() => instance.VAT = 'abc').to.throw('VAT must be a non-negative number');
            expect(() => instance.VAT = [123]).to.throw('VAT must be a non-negative number');
            expect(() => instance.VAT = {value: 456}).to.throw('VAT must be a non-negative number');
            expect(() => instance.VAT = () => 789).to.throw('VAT must be a non-negative number');
        });

        it('Throws a correct error when has a negative number as data input', () => {
            const instance = new PaymentPackage('initial text', 500);

            expect(() => instance.VAT = -4).to.throw('VAT must be a non-negative number');
            expect(() => instance.VAT = -12345).to.throw('VAT must be a non-negative number');

            expect(() => instance.VAT = 0).to.not.throw('VAT must be a non-negative number');
        });
    });

    describe('Test the .active getter/setter', () => {
        it('Works correctly with a correct data input', () => {
            const instance = new PaymentPackage('text', 1234);
            expect(instance.active).to.equal(true);

            instance.active = false;
            expect(instance.active).to.equal(false);

            instance.active = true;
            expect(instance.active).to.equal(true);
        });

        it('Throws a correct error when has a non-boolean as data input', () => {
            const instance = new PaymentPackage('initial text', 500);

            expect(() => instance.active = 1).to.throw('Active status must be a boolean');
            expect(() => instance.active = 0).to.throw('Active status must be a boolean');
            expect(() => instance.active = 123).to.throw('Active status must be a boolean');
            expect(() => instance.active = NaN).to.throw('Active status must be a boolean');

            expect(() => instance.active = 'true').to.throw('Active status must be a boolean');
            expect(() => instance.active = 'false').to.throw('Active status must be a boolean');
            expect(() => instance.active = 'abc').to.throw('Active status must be a boolean');
            expect(() => instance.active = 'a').to.throw('Active status must be a boolean');
            expect(() => instance.active = '').to.throw('Active status must be a boolean');

            expect(() => instance.active = [true]).to.throw('Active status must be a boolean');
            expect(() => instance.active = [false]).to.throw('Active status must be a boolean');
            expect(() => instance.active = [123]).to.throw('Active status must be a boolean');
            expect(() => instance.active = [1]).to.throw('Active status must be a boolean');
            expect(() => instance.active = [0]).to.throw('Active status must be a boolean');
            expect(() => instance.active = [NaN]).to.throw('Active status must be a boolean');
            expect(() => instance.active = ['abc']).to.throw('Active status must be a boolean');
            expect(() => instance.active = ['a']).to.throw('Active status must be a boolean');
            expect(() => instance.active = ['']).to.throw('Active status must be a boolean');
            expect(() => instance.active = []).to.throw('Active status must be a boolean');

            expect(() => instance.active = {active: true}).to.throw('Active status must be a boolean');
            expect(() => instance.active = {active: false}).to.throw('Active status must be a boolean');
            expect(() => instance.active = {'true' : true}).to.throw('Active status must be a boolean');
            expect(() => instance.active = {'false' : false}).to.throw('Active status must be a boolean');
            expect(() => instance.active = {'abc': 'def'}).to.throw('Active status must be a boolean');
            expect(() => instance.active = {active: ''}).to.throw('Active status must be a boolean');
            expect(() => instance.active = {active: 1}).to.throw('Active status must be a boolean');
            expect(() => instance.active = {active: 0}).to.throw('Active status must be a boolean');
            expect(() => instance.active = {active: 123}).to.throw('Active status must be a boolean');
            expect(() => instance.active = {active: NaN}).to.throw('Active status must be a boolean');
            expect(() => instance.active = null).to.throw('Active status must be a boolean');

            expect(() => instance.active = () => true).to.throw('Active status must be a boolean');
            expect(() => instance.active = () => false).to.throw('Active status must be a boolean');
            expect(() => instance.active = () => 1).to.throw('Active status must be a boolean');
            expect(() => instance.active = () => 0).to.throw('Active status must be a boolean');
            expect(() => instance.active = () => 123).to.throw('Active status must be a boolean');
            expect(() => instance.active = () => 'true').to.throw('Active status must be a boolean');
            expect(() => instance.active = () => 'false').to.throw('Active status must be a boolean');
            expect(() => instance.active = () => 'abc').to.throw('Active status must be a boolean');
            expect(() => instance.active = () => '').to.throw('Active status must be a boolean');
        });
    });

    describe('Test the toString() method', () => {
        it('Test #1', () => {
            const instance = new PaymentPackage('Consultation', 800);
            expect(instance.toString()).to.equal(
                'Package: Consultation'    + '\n' +
                '- Value (excl. VAT): 800' + '\n' +
                '- Value (VAT 20%): 960'
            );
        });

        it('Test #2', () => {
            const instance = new PaymentPackage('Software', 400);
            instance.VAT = 40;
            expect(instance.toString()).to.equal(
                'Package: Software'        + '\n' +
                '- Value (excl. VAT): 400' + '\n' +
                '- Value (VAT 40%): 560'
            );
        });

        it('Test #3', () => {
            const instance = new PaymentPackage('HR Services', 1500);
            instance.VAT = 22;
            instance.active = false;
            expect(instance.toString()).to.equal(
                'Package: HR Services (inactive)' + '\n' +
                '- Value (excl. VAT): 1500'       + '\n' +
                '- Value (VAT 22%): 1830'
            );
        });

        it('Test #4', () => {
            const instance = new PaymentPackage('Partnership Fee', 5000);
            instance.active = false;
            expect(instance.toString()).to.equal(
                'Package: Partnership Fee (inactive)' + '\n' +
                '- Value (excl. VAT): 5000'           + '\n' +
                '- Value (VAT 20%): 6000'
            );
        });
    });
});