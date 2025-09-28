function generateReport () {
    const outputField = document.getElementById('output');
    const table = document.getElementsByTagName('table')[0];

    const rowIdxToRowHeadingName = new Map();
    const outputStructure = [];

    const headingRow = table.querySelector('thead > tr');
    const headingRowCells = Array.from(headingRow.children);
    
    for (let i = 0; i < headingRowCells.length; i++) {
        const cell = headingRowCells[i];
        const cellCheckbox = cell.querySelector('input[type="checkbox"]');

        if (cellCheckbox.checked) {
            rowIdxToRowHeadingName.set(i, cell.textContent.trim().toLocaleLowerCase());
        }
    }

    for (let row of table.querySelectorAll('tbody tr')) {
        const rowCells = Array.from(row.children);
        const rowObject = {};

        for (let i = 0; i < rowCells.length; i++) {
            if (!rowIdxToRowHeadingName.has(i)) {
                continue;
            }

            const heading = rowIdxToRowHeadingName.get(i);
            rowObject[heading] = rowCells[i].textContent;
        }

        outputStructure.push(rowObject);
    }

    outputField.value = JSON.stringify(outputStructure);
}