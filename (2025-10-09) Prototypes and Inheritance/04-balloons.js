function solve () {
    class Balloon {
        color;
        gasWeight;

        constructor (color, gasWeight) {
            this.color = color;
            this.gasWeight = gasWeight;
        }
    }

    class PartyBalloon extends Balloon {
        _ribbon;

        constructor (color, gasWeight, ribbonColor, ribbonLength) {
            super(color, gasWeight);
            this._ribbon = {
                color: ribbonColor,
                length: ribbonLength
            };
        }

        get ribbon () {
            return this._ribbon;
        }
    }

    class BirthdayBalloon extends PartyBalloon {
        _text;

        constructor (color, gasWeight, ribbonColor, ribbonLength, text) {
            super(color, gasWeight, ribbonColor, ribbonLength);
            this._text = text;
        }

        get text () {
            return this._text;
        }
    }

    return { Balloon, PartyBalloon, BirthdayBalloon };
}

const classes = solve();

const testBalloon = new classes.Balloon('yellow', 20.5);
console.log(testBalloon);

const testPartyBalloon = new classes.PartyBalloon('yellow', 20.5, 'red', 10.25);
console.log(testPartyBalloon);

const ribbon = testPartyBalloon.ribbon;
console.log(ribbon);