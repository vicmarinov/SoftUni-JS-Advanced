function townPopulation (commandsArr) {
    const townsRegistry = {};

    for (let command of commandsArr) {
        let [name, population] = command.split(' <-> ');
        population = Number(population);

        if (!townsRegistry.hasOwnProperty(name)) {
            townsRegistry[name] = 0;
        }

        townsRegistry[name] += population;
    }

    for (let [name, population] of Object.entries(townsRegistry)) {
        console.log(name, ':', population);
    }
}

townPopulation([
    'Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000'
]);

townPopulation([
    'Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000'
]);