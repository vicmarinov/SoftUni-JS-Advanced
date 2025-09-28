function addItem () {
    const inputField = document.getElementById('newItemText');
    const list = document.getElementById('items');

    if (inputField.value === '') {
        console.log('Input field is blank!');
        return 'Input field is blank!';
    }

    const newItem = document.createElement('li');
    newItem.textContent = inputField.value;

    const newItemDeleteBtn = document.createElement('a');
    newItemDeleteBtn.textContent = '[Delete]';
    newItemDeleteBtn.href = '#';
    newItemDeleteBtn.addEventListener('click', deleteItem);
    
    newItem.append(newItemDeleteBtn);
    list.append(newItem);

    inputField.value = '';

    function deleteItem (event) {
        event.currentTarget.parentElement.remove()
    }
}