function solve () {
    document.querySelector('#searchBtn').addEventListener('click', onClick);
    
    function onClick () {
        const tableRows = document.querySelector('table.container tbody').getElementsByTagName('tr');
        const searchField = document.getElementById('searchField');
        console.log('started');

        for (let row of tableRows) {
            let hasMatch = false;

            for (let cell of row.getElementsByTagName('td')) {
                if (cell.textContent.match(searchField.value) !== null) {
                    hasMatch = true;
                    break;
                }   
            }

            if (hasMatch) row.classList.add('select');
            else row.classList.remove('select');
        }

        searchField.value = '';
    }
}