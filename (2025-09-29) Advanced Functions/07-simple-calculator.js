function createSimpleCalculator () {
    return {
        init (inputSelector1, inputSelector2, outputSelector) {
            this.inputField1 = document.querySelector(inputSelector1);
            this.inputField2 = document.querySelector(inputSelector2);
            this.outputField = document.querySelector(outputSelector);
        },

        add () {
            this.outputField.value = Number(this.inputField1.value) +
                                     Number(this.inputField2.value);
        },

        subtract () {
            this.outputField.value = Number(this.inputField1.value) -
                                     Number(this.inputField2.value);
        }
    };
}

const calculate = createSimpleCalculator();
calculate.init ('#num1', '#num2', '#result'); 