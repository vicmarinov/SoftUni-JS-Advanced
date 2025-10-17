function solve () {
    class Figure {
        units = 'cm';
        _unitsConversionCoefficient = 1;
        _areaInCentimeters;

        constructor (areaInCentimeters, units) {
            this._areaInCentimeters = areaInCentimeters;
            this.changeUnits(units);
        }

        get area () {
            return this._areaInCentimeters * this._unitsConversionCoefficient ** 2;
        }

        changeUnits (newUnit) {
            this.units = newUnit;

            switch(newUnit) {
                case  'm': this._unitsConversionCoefficient = 0.01; break;
                case 'cm': this._unitsConversionCoefficient = 1;    break;
                case 'mm': this._unitsConversionCoefficient = 10;   break;
            }
        }

        toString () {
            return `Figures units: ${this.units}`;
        }
    }

    class Circle extends Figure {
        _radiusInCentimeters;

        constructor (radiusInCentimeters) {
            super(undefined, 'cm');
            this.radius = radiusInCentimeters;
        }

        get radius () {
            return this._radiusInCentimeters * this._unitsConversionCoefficient;
        }

        set radius (newRadius) {
            this._radiusInCentimeters = newRadius / this._unitsConversionCoefficient;
            this._areaInCentimeters = Math.PI * this._radiusInCentimeters ** 2;
        }

        toString () {
            return `Figures units: ${this.units} Area: ${this.area} - radius: ${this.radius}`;
        }
    }

    class Rectangle extends Figure {
        _widthInCentimeters;
        _heightInCentimeters;

        constructor (widthInCentimeters, heightInCentimeters, units) {
            super(undefined, 'cm');
            this._widthInCentimeters = widthInCentimeters;
            this._heightInCentimeters = heightInCentimeters;
            this._areaInCentimeters = this._widthInCentimeters * this._heightInCentimeters;
            this.changeUnits(units)
        }

        get width () {
            return this._widthInCentimeters * this._unitsConversionCoefficient;
        }

        set width (newWidth) {
            this._widthInCentimeters = newWidth / this._unitsConversionCoefficient;
            this._areaInCentimeters = this._widthInCentimeters * this._heightInCentimeters;
        }

        get height () {
            return this._heightInCentimeters * this._unitsConversionCoefficient;
        }

        set height (newHeight) {
            this._heightInCentimeters = newHeight / this._unitsConversionCoefficient;
            this._areaInCentimeters = this._widthInCentimeters * this._heightInCentimeters;
        }

        toString () {
            return `Figures units: ${this.units} Area: ${this.area} - width: ${this.width}, height: ${this.height}`;
        }
    }

    return { Figure, Circle, Rectangle };
}



const {Figure, Circle, Rectangle} = solve();

const c = new Circle(5);
console.log(c.area); // 78.53981633974483
console.log(c.toString()); // Figures units: cm Area: 78.53981633974483 - radius: 5

const r = new Rectangle(3, 4, 'mm');
console.log(r.area); // 1200 
console.log(r.toString()); // Figures units: mm Area: 1200 - width: 30, height: 40

r.changeUnits('cm');
console.log(r.area); // 12
console.log(r.toString()); // Figures units: cm Area: 12 - width: 3, height: 4

c.changeUnits('mm');
console.log(c.area); // 7853.981633974483
console.log(c.toString()) // Figures units: mm Area: 7853.981633974483 - radius: 50