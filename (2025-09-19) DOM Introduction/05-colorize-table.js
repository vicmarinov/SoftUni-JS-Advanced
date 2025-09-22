function colorizeTables () {
    const rowsToColorize = document.querySelectorAll('table tr:nth-child(even)');

    for (const row of rowsToColorize) {
        row.style.backgroundColor = 'teal';
    }
}

// Alternative solution
// --------------------

// function colorizeTables () {
//     const tableElements = document.getElementsByTagName('table');
    
//     for (const tableElement of tableElements) {
//         const tableRowsElements = tableElement.getElementsByTagName('tr');
        
//         for (let i = 0; i < tableRowsElements.length; i++) {
//             if (i % 2 === 0) continue;
//             tableRowsElements[i].style.backgroundColor = 'teal';
//         }
//     }
// }