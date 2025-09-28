function dynamicValidation () {
    const emailInputField = document.getElementById('email');
    emailInputField.addEventListener('change', validateEmail);

    function validateEmail (event) {
        const inputElement = event.currentTarget;
        const emailRegExpr = /[a-z]+@[a-z]+\.[a-z]+/gm;

        inputElement.classList.remove('error');

        if (!emailRegExpr.test(inputElement.value)) {
            inputElement.classList.add('error');
        }
    }
}