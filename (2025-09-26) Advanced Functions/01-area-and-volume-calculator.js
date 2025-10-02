function solve (areaFunction, volumeFunction, jsonDataAsStr) {
    const data = JSON.parse(jsonDataAsStr);
    const result = [];

    for (const coordinates of data) {
        const area = areaFunction.call(coordinates);
        const volume = volumeFunction.call(coordinates);

        result.push({ area, volume });
    }

    return result;
}

function calcArea () {
    return Math.abs(this.x * this.y);
};

function calcVolume () {
    return Math.abs(this.x * this.y * this.z);
};

console.log(solve(
    calcArea,
    calcVolume,
    `[
        {"x":"1","y":"2","z":"10"},
        {"x":"7","y":"7","z":"10"},
        {"x":"5","y":"2","z":"10"}
    ]`
));

console.log(solve(
    calcArea,
    calcVolume,
    `[
        {"x":"10","y":"-22","z":"10"},
        {"x":"47","y":"7","z":"-5"},
        {"x":"55","y":"8","z":"0"},
        {"x":"100","y":"100","z":"100"},
        {"x":"55","y":"80","z":"250"}
    ]`
));