function createBreakfastManager () {
    const ingredientsStorage = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    };

    const recipesIngredients = {
        apple: {
            carbohydrate: 1,
            flavour: 2
        },

        lemonade: {
            carbohydrate: 10,
            flavour: 20
        },

        burger: {
            carbohydrate: 5,
            fat: 7,
            flavour: 3
        },

        eggs: {
            protein: 5,
            fat: 1,
            flavour: 1
        },

        turkey: {
            protein: 10,
            carbohydrate: 10,
            fat: 10,
            flavour: 10
        }
    };

    const commandsAvailable = {restock, prepare, report: getReport};
    
    function restock (ingredient, quantity) {
        ingredientsStorage[ingredient] += quantity;
        return 'Success';
    }

    function prepare (recipe, quantity) {
        const ingredients = recipesIngredients[recipe];

        // Only checking the availability of all ingredients
        // -------------------------------------------------

        for (const ingredient in ingredients) {
            const neededQuantity = ingredients[ingredient] * quantity;

            if (ingredientsStorage[ingredient] < neededQuantity) {
                return `Error: not enough ${ingredient} in stock`;
            }
        }

        // Executing the recipe
        // --------------------

        for (const ingredient in ingredients) {
            const neededQuantity = ingredients[ingredient] * quantity;
            ingredientsStorage[ingredient] -= neededQuantity;
        }

        return 'Success';
    }

    function getReport () {
        return Object.entries(ingredientsStorage)
            .map(entry => entry
            .join('=')).join(' ');
    }

    return function (command) {
        let [commandName, ...commandArguments] = command.split(' ');
        commandArguments = commandArguments
            .map(arg => Number(arg) ? Number(arg) : arg);

        return commandsAvailable[commandName](...commandArguments);
    }
}

console.log('\n'.repeat(2) + 'Test 1.' + '\n' + '-'.repeat(72));

{
    const manager = createBreakfastManager();
    console.log(manager('restock flavour 50'));
    console.log(manager('prepare lemonade 4'));
}

console.log('\n'.repeat(2) + 'Test 2.' + '\n' + '-'.repeat(72));

{
    const manager = createBreakfastManager();
    console.log(manager('restock flavour 50'));
    console.log(manager('prepare lemonade 4'));
    console.log(manager('restock carbohydrate 10'));
    console.log(manager('restock flavour 10'));
    console.log(manager('prepare apple 1'));
    console.log(manager('restock fat 10'));
    console.log(manager('prepare burger 1'));
    console.log(manager('report'));
}

console.log('\n'.repeat(2) + 'Test 3.' + '\n' + '-'.repeat(72));

{
    const manager = createBreakfastManager();
    console.log(manager('prepare turkey 1'));
    console.log(manager('restock protein 10'));
    console.log(manager('prepare turkey 1'));
    console.log(manager('restock carbohydrate 10'));
    console.log(manager('prepare turkey 1'));
    console.log(manager('restock fat 10'));
    console.log(manager('prepare turkey 1'));
    console.log(manager('restock flavour 10'));
    console.log(manager('prepare turkey 1'));
    console.log(manager('report'));
}