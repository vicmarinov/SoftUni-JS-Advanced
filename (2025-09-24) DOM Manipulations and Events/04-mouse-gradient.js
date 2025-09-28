function attachGradientEvents () {
    const gradientField = document.getElementById('gradient');
    const outputSection = document.getElementById('result');

    gradientField.addEventListener('mousemove', onMouseInField);
    gradientField.addEventListener('mouseout', onMouseOutOfField);

    function onMouseInField (event) {
        // The SoftUni's Alpha Judge System accepts only:
        // ---------------------------------------------
        // const percentage = Math.floor(event.offsetX / 300 * 100);
        
        const percentage = Math.floor(event.offsetX / gradientField.offsetWidth * 100);
        outputSection.textContent = percentage + '%';
    }

    function onMouseOutOfField () {
        outputSection.textContent = '';
    }
}