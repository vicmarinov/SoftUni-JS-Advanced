function pascalOrCamelCase () {
    const textInput = document.getElementById('text');
    const formatTypeInput = document.getElementById('naming-convention');

    const resultElement = document.getElementById('result');
    resultElement.textContent = formatText(textInput.value, formatTypeInput.value);

    console.log(textInput);
    console.log(formatTypeInput);
    console.log(resultElement);

    function formatText (text, formatType) {
        switch (formatType) {
            case 'Camel Case':
                return formatTextToCamelCase(text);
            case 'Pascal Case':
                return formatTextToPascalCase(text);
            default:
                return 'Error!'
        }
    }

    function makeOnly1stLetterUppercase (word) {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }

    function formatTextToCamelCase (text) {
        let textInPascalCase = formatTextToPascalCase(text);
        return textInPascalCase.charAt(0).toLowerCase() +
               textInPascalCase.slice(1);
    }

    function formatTextToPascalCase (text) {
        return text
            .split(' ')
            .map(word => makeOnly1stLetterUppercase(word))
            .join('');
    }
}