function filterEmployees (jsonDataAsStr, criteria) {
    const data = JSON.parse(jsonDataAsStr);

    data
        .filter(createFilteringPredicate(criteria))
        .forEach((employer, idx) => {
            console.log(`${idx}. ${employer.first_name} ${employer.last_name} - ${employer.email}`)
        });

    function createFilteringPredicate (criteria) {
        return function (obj) {
            if (criteria === 'all') {
                return true;
            } else {
                const [key, value] = criteria.split('-');
                return obj[key] === value;
            }
        }
    }
}

filterEmployees(
    `[
        {
            "id": "1",
            "first_name": "Ardine",
            "last_name": "Bassam",
            "email": "abassam0@cnn.com",
            "gender": "Female"
        },
        {
            "id": "2",
            "first_name": "Kizzee",
            "last_name": "Jost",
            "email": "kjost1@forbes.com",
            "gender": "Female"
        },
        {
            "id": "3",
            "first_name": "Evanne",
            "last_name": "Maldin",
            "email": "emaldin2@hostgator.com",
            "gender": "Male"
        }
    ]`,
    
    'gender-Female'
);

filterEmployees(
    `[
        {
            "id": "1",
            "first_name": "Kaylee",
            "last_name": "Johnson",
            "email": "k0@cnn.com",
            "gender": "Female"
        },
        {
            "id": "2",
            "first_name": "Kizzee",
            "last_name": "Johnson",
            "email": "kjost1@forbes.com",
            "gender": "Female"
        },
        {
            "id": "3",
            "first_name": "Evanne",
            "last_name": "Maldin",
            "email": "emaldin2@hostgator.com",
            "gender": "Male"
        },
        {
            "id": "4",
            "first_name": "Evanne",
            "last_name": "Johnson",
            "email": "ev2@hostgator.com",
            "gender": "Male"
        }
    ]`,
    
    'last_name-Johnson'
);