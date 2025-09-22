function sumTable () {
    const table = document.getElementsByTagName('table')[0];
    const cellsToSum = table.querySelectorAll('tr:not(:last-child) td:last-child');
    const sumCell = table.querySelectorAll('tr:last-child td:last-child')[0];
    
    // Alternative:
    // -----------
    // const sumCell = document.getElementById(sum);

    let sum = 0;
    for (let cell of cellsToSum) {
        sum += Number(cell.textContent);
    }
    
    sumCell.textContent = sum;
}