function printStoreCatalogue (inputArr) {
    const storeCatalogue = new Map();

    for (let input of inputArr) {
        let [product, price] = input.split(' : ');
        price = Number(price);

        storeCatalogue.set(product, price);
    }

    const sortedStoreCatalogue = Array.from(storeCatalogue)
        .sort((entry1, entry2) => entry1[0].localeCompare(entry2[0]));
    
    let currentLetter;
    
    for (let [product, price] of sortedStoreCatalogue) {
        if (product[0] !== currentLetter) {
            console.log(product[0]);
            currentLetter = product[0];
        }

        console.log(`  ${product}: ${price}`);
    }
}

printStoreCatalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
]);

printStoreCatalogue([
    'Banana : 2',
    'Rubic\'s Cube : 5',
    'Raspberry P : 4999',
    'Rolex : 100000',
    'Rollon : 10',
    'Rali Car : 2000000',
    'Pesho : 0.000001',
    'Barrel : 10'
]);