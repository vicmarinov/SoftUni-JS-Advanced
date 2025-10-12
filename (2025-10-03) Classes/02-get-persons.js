import { Person } from './01-person.js';

function getPersons () {
    // SoftUni's Alpha Judge System does not allow importing from external 
    // files for this problem, so the `Person` class needs to be defined 
    // inside `getPersons()` in order to be accepted by Alpha Judge.

    // class Person {
    //     firstName;
    //     lastName;
    //     age;
    //     email;

    //     constructor (firstName, lastName, age, email) {
    //         this.firstName = firstName;
    //         this.lastName = lastName;
    //         this.age = age;
    //         this.email = email;
    //     }

    //     toString () {
    //         return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`;
    //     }
    // }
    
    return [
        new Person('Anna', 'Simpson', 22, 'anna@yahoo.com'),
        new Person('SoftUni'),
        new Person('Stephan', 'Johnson', 25),
        new Person('Gabriel', 'Peterson', 24, 'g.p@gmail.com')
    ];
}

console.log(getPersons());