function attachEventsListeners () {
    const inputDistanceField = document.getElementById('inputDistance');
    const outputDistanceField = document.getElementById('outputDistance');

    const inputUnitSelector = document.getElementById('inputUnits');
    const outputUnitSelector = document.getElementById('outputUnits');

    const convertBtn = document.getElementById('convert');
    convertBtn.addEventListener('click', convertDistance);

    function convertDistance () {
        const distanceInMeters = convertToMeters(
            inputDistanceField.value,
            inputUnitSelector.value
        );

        const distanceConverted = convertFromMeters(
            distanceInMeters,
            outputUnitSelector.value
        );

        outputDistanceField.value = distanceConverted;
    }

    function convertToMeters (distance, unitToConvertFrom) {
        switch (unitToConvertFrom) {
            case 'km':  return distance * 1000;
            case 'm':   return distance;
            case 'cm':  return distance * 0.01;
            case 'mm':  return distance * 0.001;
            case 'mi':  return distance * 1609.34;
            case 'yrd': return distance * 0.9144;
            case 'ft':  return distance * 0.3048;
            case 'in':  return distance * 0.0254;
        }
    }

    function convertFromMeters (distanceInMeters, unitToConvertTo) {
        switch (unitToConvertTo) {
            case 'km':  return distanceInMeters / 1000;
            case 'm':   return distanceInMeters;
            case 'cm':  return distanceInMeters / 0.01;
            case 'mm':  return distanceInMeters / 0.001;
            case 'mi':  return distanceInMeters / 1609.34;
            case 'yrd': return distanceInMeters / 0.9144;
            case 'ft':  return distanceInMeters / 0.3048;
            case 'in':  return distanceInMeters / 0.0254;
        }
    }
}