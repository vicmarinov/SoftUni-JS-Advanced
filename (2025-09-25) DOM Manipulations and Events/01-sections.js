function createSections (textArr) {
    const containerElement = document.getElementById('content');

    for (let text of textArr) {
        const divElement = document.createElement('div');
        const paragraphElement = document.createElement('p');
        paragraphElement.textContent = text;
        paragraphElement.style.display = 'none';

        divElement.append(paragraphElement);
        containerElement.append(divElement);

        divElement.addEventListener('click', onClick);
    }

    function onClick (event) {
        const divElement = event.currentTarget;
        const paragraphElement = divElement.getElementsByTagName('p')[0];
    
        paragraphElement.style.display =
            paragraphElement.style.display === 'none' ? 'block' : 'none';
    }
}