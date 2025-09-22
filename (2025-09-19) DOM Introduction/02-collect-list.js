function collectList () {
    const listElement = document.getElementById('items');
    const textareaElement = document.getElementById('result');

    for (let listItemElement of listElement.children) {
        textareaElement.value += listItemElement.textContent + '\n';
    }
}