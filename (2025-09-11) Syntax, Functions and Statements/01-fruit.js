function fruit (fruitType, weightInGrams, pricePerKilogram) {
    let weightInKilograms = weightInGrams / 1000;
    let totalPrice = pricePerKilogram * weightInKilograms;

    console.log(`I need $${totalPrice.toFixed(2)} to buy ${weightInKilograms.toFixed(2)} kilograms ${fruitType}.`);
}

fruit('orange', 2500, 1.80);
fruit('apple', 1563, 2.35);