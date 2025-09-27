function subtract () {
    const firstInputField = document.getElementById('firstNumber');
    const secondInputField = document.getElementById('secondNumber');

    const resultElement = document.getElementById('result');
    
    resultElement.textContent = Number(firstInputField.value) -
                                Number(secondInputField.value);
}