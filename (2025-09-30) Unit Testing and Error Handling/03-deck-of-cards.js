import { createCard } from './02-playing-cards.js';

function printDeckOfCards (cardsAsStrArr) {
    const cardsArr = [];
    let hasErrorOccurred = false;

    cardsAsStrArr.forEach(cardAsStr => {
        const face = cardAsStr.slice(0, -1);
        const suit = cardAsStr[cardAsStr.length - 1];

        try {
            cardsArr.push(createCard(face, suit));
        } catch (error) {
            console.log(`Invalid card: ${cardAsStr}`);
            hasErrorOccurred = true;
        }
    });

    if (!hasErrorOccurred) {
        console.log(cardsArr.map(card => card.toString()).join(' '));
    }

    // SoftUni's Alpha Judge System does not allow importing from external 
    // files for this problem, so the `createCard` function needs to be defined 
    // inside `printDeckOfCards` in order to be accepted by Alpha Judge.
    
    // function createCard (face, suit) {
    //     const validFaces = [
    //         '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'
    //     ];
    
    //     const validSuitsAndIcons = {
    //         'S': '\u2660',
    //         'H': '\u2665',
    //         'D': '\u2666',
    //         'C': '\u2663'
    //     };
    
    //     if (!validFaces.includes(face)) {
    //         throw new Error("Invalid card face!");
    //     }
    
    //     if (!validSuitsAndIcons.hasOwnProperty(suit)) {
    //         throw new Error("Invalid card suit!");
    //     }
    
    //     return {
    //         face,
    //         suit,
    //         toString () {
    //             let g = validSuitsAndIcons[this.suit];
    //             return `${this.face}${validSuitsAndIcons[this.suit]}`;
    //         }
    //     };
    // }
}

printDeckOfCards(['AS', '10D', 'KH', '2C']);
printDeckOfCards(['5S', '3D', 'QD', '1C']);