function printCalorieObject (inputArr) {
    console.log(createCalorieObject(inputArr));

    function createCalorieObject (keyValuesArr) {
        const calorieObj = {};

        for (let i = 0; i < keyValuesArr.length; i += 2) {
            let key = keyValuesArr[i];
            let value = Number(keyValuesArr[i + 1]);

            calorieObj[key] = value;
        }

        return calorieObj;
    }
}

printCalorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);
printCalorieObject(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']);