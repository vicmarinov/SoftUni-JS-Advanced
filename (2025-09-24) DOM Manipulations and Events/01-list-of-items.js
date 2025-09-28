function addItem () {
    const inputField = document.getElementById('newItemText');
    const list = document.getElementById('items');

    if (inputField.value === '') {
        console.log('Input field is blank!');
        return 'Input field is blank!';
    }

    const newItem = document.createElement('li');
    newItem.textContent = inputField.value;
    list.append(newItem);

    inputField.value = '';
}