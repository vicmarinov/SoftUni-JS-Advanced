function solve () {
    const inputNumFiled = document.getElementById('input');
    const outputFiled = document.getElementById('result');

    const fromField = document.getElementById('selectMenuFrom');
    const toField = document.getElementById('selectMenuTo');

    const binaryOption = document.createElement('option');
    binaryOption.textContent = 'Binary';
    binaryOption.value = 'binary';
    toField.append(binaryOption);
    
    const hexadecimalOption = document.createElement('option');
    hexadecimalOption.textContent = 'Hexadecimal';
    hexadecimalOption.value = 'hexadecimal';
    toField.append(hexadecimalOption);

    const convertBtn = document.querySelector('#container > button');
    convertBtn.addEventListener('click', convertNum);

    function convertNum () {
        if (fromField.value !== 'decimal') {
            console.log('ERROR: Cannot convert from non-decimal numbers!');
            return 'ERROR: Cannot convert from non-decimal numbers!';
        }

        const num = Number(inputNumFiled.value);
        let result;

        switch(toField.value) {
            case 'binary':
                result = convertDecimalNumToBinaryNum(num)
                break;
            case 'hexadecimal':
                result = convertDecimalNumToHexNum(num)
                break;
            default:
                console.log('ERROR: Invalid value of the `To` select element!');
                return 'ERROR: Invalid value of the `To` select element!';
        }

        outputFiled.value = result;
    }

    function convertDecimalNumToBinaryNum (decimalNum) {
        let binaryNum = '';

        let num = decimalNum;
        while (num) {
            binaryNum += num % 2;
            num = Math.trunc(num / 2);
        }

        binaryNum = binaryNum.split('').reverse().join('');

        return binaryNum;
    }

    function convertDecimalNumToHexNum (decimalNum) {
        const binaryNum = convertDecimalNumToBinaryNum(decimalNum);
        const binaryToHexDictionary = {
            '0000': '0',
            '0001': '1',
            '0010': '2',
            '0011': '3',
            '0100': '4',
            '0101': '5',
            '0110': '6',
            '0111': '7',
            '1000': '8',
            '1001': '9',
            '1010': 'A',
            '1011': 'B',
            '1100': 'C',
            '1101': 'D',
            '1110': 'E',
            '1111': 'F'
        };

        let hexNum = '';

        const digitsOutOfGroup = binaryNum.slice(0, binaryNum.length % 4);
        if (digitsOutOfGroup) {
            hexNum += binaryToHexDictionary[digitsOutOfGroup.padStart(4, '0')];
        }

        for (let i = digitsOutOfGroup.length; i + 4 <= binaryNum.length; i += 4) {
            const group = binaryNum.slice(i, i + 4);
            hexNum += binaryToHexDictionary[group];
        }

        return hexNum;
    }
}