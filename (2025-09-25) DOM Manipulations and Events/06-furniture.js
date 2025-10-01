function solve () {
    const [inputField, outputField] = Array.from(
        document.querySelectorAll('#exercise > textarea')
    );

    const [generateBtn, buyBtn] = Array.from(
        document.querySelectorAll('#exercise > button')
    );
    generateBtn.addEventListener('click', generateTable);
    buyBtn.addEventListener('click', buyChosenProducts);

    const tableBody = document.querySelector('table.table > tbody');

    function generateTable () {
        const data = JSON.parse(inputField.value);

        for (let product of data) {
            const tableRow = createTableRowWithTableData ([
                createTableDataWithElement('img', '', {'src': product.img}),
                createTableDataWithElement('p', product.name, {}),
                createTableDataWithElement('p', product.price, {}),
                createTableDataWithElement('p', product.decFactor, {}),
                createTableDataWithElement('input', '', {'type': 'checkbox'})
            ]);

            tableBody.append(tableRow);
        }
    }

    function buyChosenProducts () {
        const checkboxesCheckedArr = Array.from(
            document.querySelectorAll('table.table > tbody input[type="checkbox"]')
        ).filter(checkbox => checkbox.checked);

        let productsBoughtNamesArr = [];
        let totalPrice = 0;
        let decorationFactorSum = 0;

        for (let checkbox of checkboxesCheckedArr) {
            const tableRow = checkbox.parentElement.parentElement;
            const tableDataCells = tableRow.querySelectorAll('td');

            productsBoughtNamesArr.push(tableDataCells[1].textContent);
            totalPrice += Number(tableDataCells[2].textContent);
            decorationFactorSum += Number(tableDataCells[3].textContent);
        }

        outputField.textContent += `Bought furniture: ${productsBoughtNamesArr.join(', ')}\n`;
        outputField.textContent += `Total price: ${totalPrice.toFixed(2)}\n`;
        outputField.textContent += `Average decoration factor: ${decorationFactorSum / productsBoughtNamesArr.length}`;
    }

    function createTableRowWithTableData (tableDataArr) {
        const tableRow = document.createElement('tr');

        for (let tableData of tableDataArr) {
            tableRow.append(tableData);
        }

        return tableRow;
    }

    function createTableDataWithElement (elementTagName, elementContent, elementAttributesObj) {
        const tableDataElement = document.createElement('td');

        const innerElement = document.createElement(elementTagName);
        
        if (elementTagName === 'input' || elementTagName === 'textarea') {
            innerElement.value = elementContent;
        } else {
            innerElement.textContent = elementContent;
        }

        for (let attribute in elementAttributesObj) {
            innerElement[attribute] = elementAttributesObj[attribute];
        }

        tableDataElement.append(innerElement);
        
        return tableDataElement;
    }
}