function roadRadar (speed, roadType) {
    function getOverlimitSpeedStatus (speed, speedLimit) {
        let difference = speed - speedLimit;

        if (difference <= 20) return 'speeding';
        else if (difference <= 40) return 'excessive speeding';
        else return 'reckless driving';
    }

    const speedLimitsList = {
        'motorway': 130,
        'interstate': 90,
        'city': 50,
        'residential': 20
    };

    let speedLimit = speedLimitsList[roadType];

    if (speed <= speedLimit) {
        console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
    } else {
        console.log(`The speed is ${speed - speedLimit} km/h faster than the allowed speed of ${speedLimit} - ${getOverlimitSpeedStatus(speed, speedLimit)}`);
    }
}

roadRadar(40, 'city');
roadRadar(21, 'residential');
roadRadar(120, 'interstate');
roadRadar(200, 'motorway');