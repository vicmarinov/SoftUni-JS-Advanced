function addValidations () {
    // DOM Objects
    // -----------
    const formElement = document.getElementById('registerForm');
    const companyInfoFieldset = document.getElementById('companyInfo');
    const validityMessageElement = document.getElementById('valid');

    const usernameInputField = document.getElementById('username');
    const emailInputField = document.getElementById('email');
    const passwordInputField = document.getElementById('password');
    const confirmPasswordInputField = document.getElementById('confirm-password');
    const isCompanyInputField = document.getElementById('company');
    const companyNumberInputField = document.getElementById('companyNumber');

    // Boolean Flags
    // -------------

    let isCompany = false;
    let isEverythingValid = true;

    // Event Handling Functionality
    // ----------------------------

    formElement.addEventListener('submit', function (event) {
        event.preventDefault();

        isEverythingValid = true;

        const inputFieldsToValidate = [
            usernameInputField,
            emailInputField,
            passwordInputField,
            confirmPasswordInputField,
        ];

        if (isCompany) inputFieldsToValidate.push(companyNumberInputField);

        inputFieldsToValidate.forEach(field => validateInputField(field));

        if (isEverythingValid) {
            validityMessageElement.style.display = 'block';
        } else {
            validityMessageElement.style.display = 'none';
        }
    });

    isCompanyInputField.addEventListener('change', function () {
        if (isCompanyInputField.checked) {
            companyInfoFieldset.style.display = 'block';
            isCompany = true;
        } else {
            companyInfoFieldset.style.display = 'none';
            companyNumberInputField.style.border = 'none';
            isCompany = false;
        }
    })

    function validateInputField (inputField) {
        let isValid;

        switch (inputField.id) {
            case 'username':         isValid = validateUsername();      break;
            case 'email':            isValid = validateEmail();         break;
            case 'password':         isValid = validatePassword();      break;
            case 'confirm-password': isValid = validatePassword();      break;
            case 'companyNumber':    isValid = validateCompanyNumber(); break;
        }

        if (isValid) {
            inputField.style.border = 'none';
        } else {
            inputField.style.border = 'solid';
            inputField.style.borderColor = 'red';
        }

        isEverythingValid = isEverythingValid && isValid;
    }

    // Validation Functions (Predicates)
    // ---------------------------------
    
    function validateUsername () {
        const usernameRegExpr = /^[A-Za-z0-9]{3,20}$/gm;
        return usernameRegExpr.test(usernameInputField.value);
    }

    function validateEmail () {
        const email = emailInputField.value;
        return email.includes('@') && email.indexOf('@') < email.indexOf('.');
    }

    function validatePassword () {
        const passwordRegExpr = /^\w{5,15}$/gm;
        return passwordRegExpr.test(passwordInputField.value) &&
            passwordInputField.value === confirmPasswordInputField.value;
    }

    function validateCompanyNumber () {
        const companyNumber = companyNumberInputField.value;
        return companyNumber >= 1000 && companyNumber <= 9999;
    }
}