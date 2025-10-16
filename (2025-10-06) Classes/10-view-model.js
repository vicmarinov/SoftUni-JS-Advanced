class Textbox {
    _value;
    _elements;
    _invalidSymbols;

    constructor (selector, invalidSymbolsRegExpr) {
        this.elements = selector;
        this._invalidSymbols = invalidSymbolsRegExpr
    }

    get value () {
        return this._value;
    }

    set value (newValue) {
        this._value = newValue;

        Array.from(this.elements)
            .forEach(element => element.value = newValue);
    }

    get elements () {
        return this._elements;
    }

    set elements (selector) {
        this._elements = document.querySelectorAll(selector);

        Array.from(this._elements).forEach(element => {
            element.addEventListener('input', (event) => {
                this.value = event.currentTarget.value;
            });
        });
    }

    isValid () {
        return !this._invalidSymbols.test(this.value);
    }
}



const textbox = new Textbox('.textbox', /[^a-zA-Z0-9]/);
const inputs = document.getElementsByClassName('.textbox');

Array.from(inputs).forEach(input => {
    input.addEventListener('click', () => {console.log(textbox.value);})
});