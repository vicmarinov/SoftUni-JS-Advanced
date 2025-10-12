function autoEngineeringCompany (inputArr) {
    const register = new Map();

    for (const input of inputArr) {
        let [brandName, modelName, quantity] = input.split(' | ');
        quantity = Number(quantity);

        if (!register.has(brandName)) {
            register.set(brandName, new Map());
        }

        const modelsOfBrand = register.get(brandName);

        if (!modelsOfBrand.has(modelName)) {
            modelsOfBrand.set(modelName, 0);
        }

        modelsOfBrand.set(
            modelName, modelsOfBrand.get(modelName) + quantity
        );
    }

    for (const [brandName, modelsOfBrand] of register.entries()) {
        console.log(brandName);

        for (const [modelName, quantity] of modelsOfBrand.entries()) {
            console.log(`###${modelName} -> ${quantity}`);
        }
    }
}

// Alternative solution
// --------------------

// function autoEngineeringCompany (inputArr) {
//     const register = {};

//     for (const input of inputArr) {
//         let [brandName, modelName, quantity] = input.split(' | ');
//         quantity = Number(quantity);

//         if (!register[brandName]) {
//             register[brandName] = {};
//         }

//         if (!register[brandName][modelName]) {
//             register[brandName][modelName] = 0;
//         }

//         register[brandName][modelName] += quantity;
//     }

//     for (const [brandName, modelsOfBrand] of Object.entries(register)) {
//         console.log(brandName);

//         for (const [modelName, quantity] of Object.entries(modelsOfBrand)) {
//             console.log(`###${modelName} -> ${quantity}`);
//         }
//     }
// }

autoEngineeringCompany([
    'Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10'
]);