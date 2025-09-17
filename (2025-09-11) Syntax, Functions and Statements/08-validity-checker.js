function validityChecker (x1, y1, x2, y2) {
    function calculateDistance (x1, y1, x2, y2) {
        return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
    }

    function checkValidityOfDistance (x1, y1, x2, y2) {
        return calculateDistance(x1, y1, x2, y2) % 1 === 0;
    }

    function printValidityMessage (x1, y1, x2, y2) {
        if (checkValidityOfDistance(x1, y1, x2, y2)) {
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
        } else {
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
        }
    }

    printValidityMessage(x1, y1, 0, 0);
    printValidityMessage(x2, y2, 0, 0);
    printValidityMessage(x1, y1, x2, y2);
}

validityChecker(3, 0, 0, 4);
validityChecker(2, 1, 1, 1);