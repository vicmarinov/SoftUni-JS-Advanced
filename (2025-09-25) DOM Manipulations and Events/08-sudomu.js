function solve () {
    const tableBodyElement = document.querySelector('#exercise > table > tbody');
    const commentParagraphElement = document.querySelector('#check > p');

    const [quickCheckBtn, clearBtn] = Array.from(
        document.querySelectorAll('#exercise > table > tfoot > tr > td > button')
    );

    quickCheckBtn.addEventListener('click', checkTable);
    clearBtn.addEventListener('click', clearTable);

    function checkTable () {
        const tableMatrix = [[], [], []];

        for (let rowIdx = 0; rowIdx < 3; rowIdx++) {
            const tableRowDataCells = tableBodyElement
                .getElementsByTagName('tr')[rowIdx]
                .getElementsByTagName('td');

            for (let cellIdx = 0; cellIdx < 3; cellIdx++) {
                tableMatrix[rowIdx][cellIdx] = Number(
                    tableRowDataCells[cellIdx]
                        .getElementsByTagName('input')[0]
                        .value
                );
            }
        }

        let hasWon = true;

        for (let i = 0; i < 3 && hasWon; i++) {
            const col = [];
            
            for (let j = 0; j < 3 && hasWon; j++) {
                col.push(tableMatrix[j][i]);

                if (!tableMatrix[i].includes(j + 1)) {
                    hasWon = false;
                    break;
                }
            }

            for (let j = 1; j <= 3; j++) {
                if (!col.includes(j)) {
                    hasWon = false;
                    break;
                }
            }
        }

        tableBodyElement.parentElement.style.border = hasWon ? '2px solid green' : '2px solid red';
        commentParagraphElement.textContent = hasWon ? 'You solve it! Congratulations!' : 'NOP! You are not done yet...';
        commentParagraphElement.style.color = hasWon ? 'green' : 'red';
    }

    function clearTable () {
        for (const tableCell of tableBodyElement.getElementsByTagName('td')) {
            tableCell.getElementsByTagName('input')[0].value = '';
        }

        tableBodyElement.parentElement.style.border = 'none';
        commentParagraphElement.textContent = '';
    }
}