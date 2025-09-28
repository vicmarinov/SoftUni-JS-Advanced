function solve() {
    document.querySelector('#btnSend').addEventListener('click', onClick);

    const inputField = document.getElementById('inputs').getElementsByTagName('textarea')[0];
    const outputOfBestRestaurant = document.getElementById('bestRestaurant').getElementsByTagName('p')[0];
    const outputOfBestRestaurantsWorkers = document.getElementById('workers').getElementsByTagName('p')[0];
    
    function onClick () {
        const inputData = JSON.parse(inputField.value);
        const restaurantsArr = [];

        for (let inputRow of inputData) {
            let [restaurantName, inputOfWorkersEntries] = inputRow.split(' - ');
            let workersEntriesAsStr = inputOfWorkersEntries.split(', ');

            let restaurantObserved = restaurantsArr.filter(r => r.name === restaurantName)[0];

            if (!restaurantObserved) {
                restaurantObserved = createRestaurant(restaurantName);
                restaurantsArr.push(restaurantObserved);
            }

            const newWorkersArr = [];

            for (let entry of workersEntriesAsStr) {
                let [workerName, workerSalary] = entry.split(' ');
                workerSalary = Number(workerSalary);

                newWorkersArr.push(createWorker(workerName, workerSalary));
            }

            restaurantObserved.addWorkers(newWorkersArr);
        }

        console.log(restaurantsArr);

        const bestRestaurant = restaurantsArr
            .slice()
            .sort((restA, restB) => {
                return restB.averageSalary - restA.averageSalary ||
                restaurantsArr.indexOf(restA) - restaurantsArr.indexOf(restB)
            })[0];
        
        console.log(bestRestaurant);

        outputOfBestRestaurant.textContent = `Name: ${bestRestaurant.name} Average Salary: ${bestRestaurant.averageSalary.toFixed(2)} Best Salary: ${bestRestaurant.bestSalary.toFixed(2)}`;
        outputOfBestRestaurantsWorkers.textContent = bestRestaurant.workers
            .slice()
            .sort((workerA, workerB) => workerB.salary - workerA.salary)
            .map(worker => `Name: ${worker.name} With Salary: ${worker.salary}`)
            .join(' ');
    }

    function createRestaurant (name) {
        return {
            name,
            workers: [],
            bestSalary: 0,
            averageSalary: undefined,
            _sumOfSalaries: 0,
            addWorkers(workersArr) {
                for (let worker of workersArr) {
                    this._sumOfSalaries += worker.salary;

                    if (worker.salary > this.bestSalary) {
                        this.bestSalary = worker.salary;
                    }

                    this.workers.push(worker);
                }

                this.averageSalary = this._sumOfSalaries / this.workers.length;
            }
        };
    }

    function createWorker (name, salary) {
        return {name, salary};
    }
}

// The data structure used in `restaurantsArr`
// constant variable of this solution of the
// problem would look like this:

// [
//     {
//         name: 'PizzaHut',
//         workers: [
//             {
//                 name: 'Peter',
//                 salary: 500
//             },
//             {
//                 name: 'George',
//                 salary: 300
//             },
//             {
//                 name: 'Mark',
//                 salary: 800
//             }
//         ],
//         bestSalary: 800,
//         averageSalary: 533.3333333333334,
//         _sumOfSalaries: 1600,
//         addWorkers(workersArr) { ... }
//     },
//     {
//         name: 'TheLake',
//         workers: [
//             {
//                 name: 'Bob',
//                 salary: 1300
//             },
//             {
//                 name: 'Joe',
//                 salary: 780
//             },
//             {
//                 name: 'Jane',
//                 salary: 660
//             }
//         ],
//         bestSalary: 1300,
//         averageSalary: 913.3333333333334,
//         _sumOfSalaries: 2740,
//         addWorkers(workersArr) { ... }
//     },
//     {
//         name: 'Mikes',
//         workers: [
//             {
//                 name: 'Steve',
//                 salary: 1000
//             },
//             {
//                 name: 'Ivan',
//                 salary: 200
//             },
//             {
//                 name: 'Paul',
//                 salary: 800
//             }
//         ],
//         bestSalary: 1000,
//         averageSalary: 666.6666666666666,
//         _sumOfSalaries: 2000,
//         addWorkers(workersArr) { ... }
//     },
//     {
//         name: 'Fleet',
//         workers: [
//             {
//                 name: 'Maria',
//                 salary: 850
//             },
//             {
//                 name: 'Janet',
//                 salary: 650
//             }
//         ],
//         bestSalary: 850,
//         averageSalary: 750,
//         _sumOfSalaries: 1500,
//         addWorkers(workersArr) { ... }
//     }
// ]