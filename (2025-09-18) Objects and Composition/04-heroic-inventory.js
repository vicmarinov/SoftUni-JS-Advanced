function printHeroesRegisterAsJSON (inputArr) {
    const heroesRegister = [];

    for (let input of inputArr) {
        if (input.trim() === '') continue;

        let [name, level, items] = input.split(' / ');
        level = Number(level);
        items = items ? items.split(', ') : [];

        heroesRegister.push(createHero(name, level, items));
    }

    function createHero (name, level, items) {
        return {name, level, items};
    }

    console.log(JSON.stringify(heroesRegister));
}


printHeroesRegisterAsJSON(
    [
        'Isacc / 25 / Apple, GravityGun',
        'Derek / 12 / BarrelVest, DestructionSword',
        'Hes / 1 / Desolator, Sentinel, Antara'
    ]
);

printHeroesRegisterAsJSON(
    [
        'Jake / 1000 / Gauss, HolidayGrenade'
    ]
);