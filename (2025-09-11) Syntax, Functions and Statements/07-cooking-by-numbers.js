function cookingByNumbers (numAsStr, ...operationsToBeDone) {
    const operationsAvailable = {
        'chop': x => x / 2,
        'dice': x => Math.sqrt(x),
        'spice': x => x + 1,
        'bake': x => x * 3,
        'fillet': x => x * 0.8
    };

    let num = Number(numAsStr);

    for (let operation of operationsToBeDone) {
        num = operationsAvailable[operation](num);
        console.log(num);
    }
}

cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');
cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');