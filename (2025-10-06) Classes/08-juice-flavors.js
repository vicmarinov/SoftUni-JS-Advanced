function juiceFlavors (inputArr) {
    const VOLUME_OF_ONE_BOTTLE = 1000;

    const flavoursVolume = new Map();
    const flavoursBottles = new Map();

    for (const input of inputArr) {
        let [flavour, volume] = input.split(' => ');
        volume = Number(volume);

        if (!flavoursVolume.has(flavour)) {
            flavoursVolume.set(flavour, 0);
        }

        flavoursVolume.set(flavour, flavoursVolume.get(flavour) + volume);

        const bottlesQuantity = Math.trunc(
            flavoursVolume.get(flavour) / VOLUME_OF_ONE_BOTTLE
        );

        if (bottlesQuantity) {
            if (!flavoursBottles.has(flavour)) {
                flavoursBottles.set(flavour, 0);
            }

            flavoursBottles.set(flavour, bottlesQuantity);
        }
    }

    for (const [flavour, bottlesQuantity] of flavoursBottles.entries()) {
        console.log(`${flavour} => ${bottlesQuantity}`);
    }
}

juiceFlavors([
    'Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549'
]);

juiceFlavors([
    'Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789'
]);