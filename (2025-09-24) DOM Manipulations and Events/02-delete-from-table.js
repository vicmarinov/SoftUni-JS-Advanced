function deleteByEmail () {
    const inputField = document.getElementsByName('email')[0];
    const table = document.getElementById('customers');
    const commentSection = document.getElementById('result');

    let hasFoundEmail = false;

    for (const tableRow of table.querySelectorAll('tbody tr')) {
        const emailCell = tableRow.children[1];

        if (emailCell.textContent !== inputField.value) {
            continue;
        }

        hasFoundEmail = true;

        tableRow.remove();
        commentSection.textContent = 'Deleted.';
    }

    if (!hasFoundEmail) {
        commentSection.textContent = 'Not found.';
    }
}