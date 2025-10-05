function solve () {

    // Getting DOM objects and adding event listeners
    // ----------------------------------------------

    const inputFieldsContainer = document.getElementById('container');

    const [
        inputNameField,
        inputHallField,
        inputPriceField
    ] = inputFieldsContainer.getElementsByTagName('input');

    const addMovieBtn = inputFieldsContainer
        .getElementsByTagName('button')[0];
    
    addMovieBtn.addEventListener('click', addNewMovie);

    const moviesOnScreenList = document
        .getElementById('movies')
        .getElementsByTagName('ul')[0];
    
    const archivedMoviesList = document
        .getElementById('archive')
        .getElementsByTagName('ul')[0];
    
    const clearArchiveBtn = document
        .getElementById('archive')
        .getElementsByTagName('button')[0];
    
    clearArchiveBtn.addEventListener('click', clearArchive);

    Array.from(document.getElementsByTagName('form'))
        .forEach(form => {
            form.addEventListener('submit', disableFormActionOnSubmit);
        });
    
    
    
    // Defining event handling functionality
    // -------------------------------------

    function disableFormActionOnSubmit (event) {
        event.preventDefault();
    }

    function addNewMovie () {
        const name = inputNameField.value;
        const hall = inputHallField.value;
        let price = inputPriceField.value;

        const hasCorrectInput = name  && hall && price &&
                                !Number.isNaN(Number(price));
        if (!hasCorrectInput) {
            console.log('ERROR: The movie name, hall or ticket price are not correctly filled!');
            return;
        }

        price = Number(price);

        moviesOnScreenList.append(createMovieItem(name, hall, price));

        inputNameField.value = '';
        inputHallField.value = '';
        inputPriceField.value = '';
    }

    function archiveMovie (event) {
        const movieItem = event.currentTarget
            .parentElement.parentElement;
        
        const ticketPrice = Number(
            movieItem
                .getElementsByTagName('div')[0]
                .getElementsByTagName('strong')[0]
                .textContent
        );

        let ticketsSold = movieItem
            .getElementsByTagName('input')[0].value;
        
        if (!ticketsSold || Number.isNaN(Number(ticketsSold))) {
            console.log('ERROR: The thickets sold quantity is not correctly filled!');
            return;
        }

        ticketsSold = Number(ticketsSold);
        
        movieItem.getElementsByTagName('strong')[0].remove();
        movieItem.getElementsByTagName('div')[0].remove();

        movieItem.append(createElement(
            'strong',
            `Total amount: ${(ticketPrice * ticketsSold).toFixed(2)}`,
            {}
        ));

        const deleteBtn = createElement('button', 'Delete', {});
        deleteBtn.addEventListener('click', deleteMovie);
        movieItem.append(deleteBtn);

        archivedMoviesList.append(movieItem);
    }

    function deleteMovie (event) {
        const movieItem = event.currentTarget.parentElement;
        movieItem.remove();
    }

    function clearArchive () {
        archivedMoviesList.innerHTML = '';
    }



    // Defining DOM elements' objects factory functions
    // ------------------------------------------------

    function createMovieItem (name, hall, price) {
        const itemElement = createElement('li', '', {});
        itemElement.append(createElement('span', name, {}));
        itemElement.append(createElement('strong', `Hall: ${hall}`, {}));

        const itemDetails = createElement('div', '', {});
        itemDetails.append(createElement('strong', price.toFixed(2), {}));
        itemDetails.append(createElement('input', '', {placeholder: 'Tickets Sold'}));

        const archiveBtn = createElement('button', 'Archive', {});
        archiveBtn.addEventListener('click', archiveMovie);
        itemDetails.append(archiveBtn);

        itemElement.append(itemDetails);

        return itemElement;
    }

    function createElement (tagName, textContent, propertiesObj) {
        const element = document.createElement(tagName);
        element.textContent = textContent;

        for (const property in propertiesObj) {
            element[property] = propertiesObj[property];
        }

        return element;
    }
}