function searchInList () {
    const listElement = document.getElementById('towns');
    const searchField = document.getElementById('searchText');
    const commentField = document.getElementById('result');

    let matchesFound = 0;

    for (let listItem of listElement.getElementsByTagName('li')) {
        if (listItem.textContent.match(searchField.value)) {
            listItem.style.fontWeight = 'bold';
            listItem.style.textDecoration = 'underline';
            matchesFound++;
        } else {
            listItem.style.fontWeight = 'normal';
            listItem.style.textDecoration = 'none';
        }
    }

    commentField.textContent = `${matchesFound} matches found`;
}