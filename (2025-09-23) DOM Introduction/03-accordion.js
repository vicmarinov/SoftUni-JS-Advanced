function toggleAccordion () {
    const toggleBtn = document.querySelector('span[class="button"]');
    const extraText = document.getElementById('extra');

    console.log(extraText.style.display);

    // Alternative:
    // -----------
    // if (extraText.style.display === 'none' || extraText.style.display === '') {

    if (window.getComputedStyle(extraText).display === 'none') {
        extraText.style.display = 'block';
        toggleBtn.textContent = 'Less';
    } else {
        extraText.style.display = 'none';
        toggleBtn.textContent = 'More';
    }
}