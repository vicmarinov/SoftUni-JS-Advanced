class Person {
    _firstName = '';
    _lastName = '';
    _fullName;

    constructor (firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get firstName () {
        return this._firstName;
    }

    set firstName (newFirstName) {
        this._firstName = newFirstName;
        this._fullName = `${this._firstName} ${this._lastName}`;
    }

    get lastName () {
        return this._lastName;
    }

    set lastName (newLastName) {
        this._lastName = newLastName;
        this._fullName = `${this._firstName} ${this._lastName}`;
    }

    get fullName () {
        return this._fullName;
    }

    set fullName (newFullName) {
        const newFullNameParts = newFullName.split(' ');

        if (newFullNameParts.length !== 2) {
            return;
        }

        [this._firstName, this._lastName] = newFullNameParts;
    }
}



{
    const person = new Person('Peter', 'Ivanov');
    console.log(person.fullName); // Peter Ivanov

    person.firstName = 'George';
    console.log(person.fullName); // George Ivanov

    person.lastName = 'Peterson';
    console.log(person.fullName); // George Peterson

    person.fullName = 'Nikola Tesla';
    console.log(person.firstName); // Nikola
    console.log(person.lastName); // Tesla
}

{
    const person = new Person('Albert', 'Simpson');
    console.log(person.fullName); // Albert Simpson
    
    person.firstName = 'Simon';
    console.log(person.fullName); // Simon Simpson

    person.fullName = 'Peter';
    console.log(person.firstName);  // Simon
    console.log(person.lastName);  // Simpson
}