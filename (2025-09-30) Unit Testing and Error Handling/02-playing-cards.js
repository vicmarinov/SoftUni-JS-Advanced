function createCard (face, suit) {
    const validFaces = [
        '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'
    ];

    const validSuitsAndIcons = {
        'S': '\u2660',
        'H': '\u2665',
        'D': '\u2666',
        'C': '\u2663'
    };

    if (!validFaces.includes(face)) {
        throw new Error("Invalid card face!");
    }

    if (!validSuitsAndIcons.hasOwnProperty(suit)) {
        throw new Error("Invalid card suit!");
    }

    return {
        face,
        suit,
        toString () {
            let g = validSuitsAndIcons[this.suit];
            return `${this.face}${validSuitsAndIcons[this.suit]}`;
        }
    };
}

// console.log(createCard('A', 'S').toString());
// console.log(createCard('10', 'H').toString());
// console.log(createCard('1', 'C').toString());

export { createCard };