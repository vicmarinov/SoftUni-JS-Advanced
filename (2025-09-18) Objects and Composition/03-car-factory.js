function createCar (order) {
    const car = {};

    car.model = order.model;

    const enginesTypes = {
        small: {power: 90, volume: 1800},
        normal: {power: 120, volume: 2400},
        monster: {power: 200, volume: 3500}
    };

    if (order.power <= enginesTypes.small.power) {
        car.engine = enginesTypes.small;
    } else if (order.power <= enginesTypes.normal.power) {
        car.engine = enginesTypes.normal;
    } else if (order.power <= enginesTypes.monster.power) {
        car.engine = enginesTypes.monster;
    } else {
        car.engine = null;
    }

    car.carriage = createCarriage(order.carriage, order.color);

    let wheelDiameter = Math.floor(order.wheelsize)
    wheelDiameter = wheelDiameter % 2 === 0 ? wheelDiameter - 1 : wheelDiameter;
    
    car.wheels = new Array(4).fill(wheelDiameter);

    function createCarriage (type, color) {
        return carriage = {type, color};
    }

    return car;
}

console.log(createCar(
    {
        model: 'VW Golf II',
        power: 90,
        color: 'blue',
        carriage: 'hatchback',
        wheelsize: 14
    }

));

console.log(createCar(
    {
        model: 'Opel Vectra',
        power: 110,
        color: 'grey',
        carriage: 'coupe',
        wheelsize: 17
    }
));