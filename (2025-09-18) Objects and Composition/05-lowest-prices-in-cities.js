function printLowestPricesOfProducts (inputArr) {
    const productsLowestPrices = new Map();

    for (let input of inputArr) {
        let [town, product, price] = input.split(' | ');
        price = Number(price);

        if (!productsLowestPrices.has(product)) {
            productsLowestPrices.set(product, {price, town});
        }

        if (price < productsLowestPrices.get(product).price) {
            productsLowestPrices.set(product, {price, town});
        }
    }

    for (let [product, {price, town}] of productsLowestPrices.entries()) {
        console.log(`${product} -> ${price} (${town})`);
    }
}

printLowestPricesOfProducts([
    'Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10'
]);