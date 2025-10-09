import { expect } from 'chai';
import { rgbToHexColor } from '../06-RGB-to-hex.js';

describe('Test rgbToHexColor(red, green, blue)', () => {
    it('Returns the correct hex color', () => {
        expect(rgbToHexColor(0, 0, 0)).to.equal('#000000');
        expect(rgbToHexColor(255, 255, 255)).to.equal('#FFFFFF');
        expect(rgbToHexColor(255, 0, 0)).to.equal('#FF0000');
        expect(rgbToHexColor(0, 255, 0)).to.equal('#00FF00');
        expect(rgbToHexColor(0, 0, 255)).to.equal('#0000FF');
    });

    it('Returns undefined when an invalid type/value is passed as an argument', () => {
        expect(rgbToHexColor(300, 300, 300)).to.be.undefined;

        expect(rgbToHexColor(300, 0, 0)).to.be.undefined;
        expect(rgbToHexColor(0, 300, 0)).to.be.undefined;
        expect(rgbToHexColor(0, 0, 300)).to.be.undefined;

        expect(rgbToHexColor(-1, -2, -3)).to.be.undefined;

        expect(rgbToHexColor(-4, 0, 0)).to.be.undefined;
        expect(rgbToHexColor(0, -5, 0)).to.be.undefined;
        expect(rgbToHexColor(0, 0, -6)).to.be.undefined;

        expect(rgbToHexColor('1', '2', '3')).to.be.undefined;
        expect(rgbToHexColor('1, 2, 3')).to.be.undefined;

        expect(rgbToHexColor('1', 2, 3)).to.be.undefined;
        expect(rgbToHexColor(1, '2', 3)).to.be.undefined;
        expect(rgbToHexColor(1, 2, '3')).to.be.undefined;

        expect(rgbToHexColor([1, 2, 3])).to.be.undefined;
        expect(rgbToHexColor({red: 1, green: 2, blue: 3})).to.be.undefined;
    });

    it('Returns undefined when has missing arguments', () => {
        expect(rgbToHexColor()).to.be.undefined;
        expect(rgbToHexColor(1)).to.be.undefined;
        expect(rgbToHexColor(1, 2)).to.be.undefined;
    });
});