function timeToWalk (distanceInSteps, lengthOfFootprintInMeters, speedInKmh) {
    let distanceInKm = (distanceInSteps * lengthOfFootprintInMeters) / 1000;
    let totalTimeInHours = distanceInKm / speedInKmh;
    totalTimeInHours += Math.trunc(distanceInKm / 0.500) * (1 / 60); // 1-minute break every 500 meters

    let totalTimeInSeconds = Math.round(totalTimeInHours * 3600);

    let resultSeconds = totalTimeInSeconds % 60;
    let resultMinutes = ((totalTimeInSeconds - resultSeconds) / 60) % 60;
    let resultHours = (totalTimeInSeconds - resultMinutes * 60 - resultSeconds) / 3600;

    console.log(`${resultHours.toString().padStart(2, '0')}:${resultMinutes.toString().padStart(2, '0')}:${resultSeconds.toString().padStart(2, '0')}`);
}

timeToWalk(4000, 0.60, 5);
timeToWalk(2564, 0.70, 5.5);
timeToWalk(2564, 0.70, 1);