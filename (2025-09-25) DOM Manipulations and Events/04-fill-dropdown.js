function addItem () {
    const newItemTextField  = document.getElementById('newItemText');
    const newItemValueField = document.getElementById('newItemValue');

    const newItemElement = document.createElement('option');
    newItemElement.textContent = newItemTextField.value;
    newItemElement.value       = newItemValueField.value;

    const dropdownMenuElement = document.getElementById('menu');
    dropdownMenuElement.append(newItemElement);

    newItemTextField.value  = '';
    newItemValueField.value = '';
}