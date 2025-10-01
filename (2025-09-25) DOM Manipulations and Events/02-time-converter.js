function attachEventsListeners () {
    const convertBtnsArr = Array.from(
        document.querySelectorAll('input[type="button"][value="Convert"]')
    );

    for (const btn of convertBtnsArr) {
        btn.addEventListener('click', convertTime);
    }

    function convertTime (event) {
        const inputField = event.currentTarget
            .parentElement.querySelector('input[type="text"]');
        
        const inputValue = Number(inputField.value);
        const inputUnit = inputField.id;

        const timeInSeconds = convertToSeconds(inputValue, inputUnit);
        const timeInMinutes = timeInSeconds /  60;
        const timeInHours   = timeInSeconds / (60 * 60);
        const timeInDays    = timeInSeconds / (60 * 60 * 24);

        document.getElementById('seconds').value = timeInSeconds;
        document.getElementById('minutes').value = timeInMinutes;
        document.getElementById('hours').value   = timeInHours;
        document.getElementById('days').value    = timeInDays;
    }

    function convertToSeconds (timeValue, unitOfMeasurement) {
        switch (unitOfMeasurement) {
            case 'days':    return timeValue * 60 * 60 * 24;
            case 'hours':   return timeValue * 60 * 60;
            case 'minutes': return timeValue * 60;
            case 'seconds': return timeValue;
        }
    }
}