function getTownsAsJSON (tableRowsArr) {
    const townsArr = [];

    for (let i = 1; i < tableRowsArr.length; i++) {
        let [town, latitude, longitude] = tableRowsArr[i]
            .split(/ *\| */gm)
            .filter(x => x);
        
        latitude = Number(Number(latitude).toFixed(2));
        longitude = Number(Number(longitude).toFixed(2));

        townsArr.push({
            'Town': town,
            'Latitude': latitude,
            'Longitude': longitude
        });
    }

    return JSON.stringify(townsArr);
}

console.log(getTownsAsJSON([
    '| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |'
]));

console.log(getTownsAsJSON([
    '| Town | Latitude | Longitude |',
    '| Veliko Turnovo | 43.0757 | 25.6172 |',
    '| Monatevideo | 34.50 | 56.11 |'
]));