function addValidation () {
    const emailInputField = document.getElementById('email');
    emailInputField.addEventListener('change', validateEmail);

    function validateEmail (event) {
        const emailInputField = event.currentTarget;

        if (!/[a-z]+@[a-z]+\.[a-z]+/gm.test(emailInputField.value)) {
            emailInputField.classList.add('error');
        } else {
            emailInputField.classList.remove('error');
        }
    }
}