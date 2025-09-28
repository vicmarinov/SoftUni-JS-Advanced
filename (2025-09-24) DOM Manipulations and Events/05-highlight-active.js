function highlightActive () {
    const inputFieldsArr = Array.from(document.getElementsByTagName('input'));
    inputFieldsArr.forEach(field => field.addEventListener('focus', onFocus));
    inputFieldsArr.forEach(field => field.addEventListener('blur', onBlur));

    function onFocus (event) {
        event.currentTarget.parentElement.classList.add('focused');
    }

    function onBlur (event) {
        event.currentTarget.parentElement.classList.remove('focused');
    }
}