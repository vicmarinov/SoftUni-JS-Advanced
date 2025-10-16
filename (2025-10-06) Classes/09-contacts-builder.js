class Contact {
    firstName;
    lastName;
    phone;
    email;
    _isOnline = false;
    _contactElementReference;

    constructor (firstName, lastName, phone, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.email = email;
    }

    get online () {
        return this._isOnline;
    }

    set online (booleanValue) {
        this._isOnline = booleanValue;

        if (!this._contactElementReference) return;
        
        const titleElement = this._contactElementReference
            .getElementsByClassName('title')[0];

        if (booleanValue) {
            titleElement.classList.add('online');
        } else {
            titleElement.classList.remove('online');
        }
    }

    render (parentElementId) {
        const contactArticle = document.createElement('article');


        const titleElement = document.createElement('div');
        titleElement.textContent = `${this.firstName} ${this.lastName}`;
        titleElement.classList.add('title');
        if(this._isOnline) titleElement.classList.add('online');
        contactArticle.append(titleElement);

        const buttonElement = document.createElement('button');
        buttonElement.innerHTML = '&#8505;';
        titleElement.append(buttonElement);
        buttonElement.addEventListener('click', (event) => {
            const contactArticle = event
                .currentTarget
                .parentElement
                .parentElement;
            
            const infoElement = contactArticle
                .getElementsByClassName('info')[0];
            
            infoElement.style.display =
                infoElement.style.display === 'none' ? 'block' : 'none';
        });

        const infoElement = document.createElement('div');
        infoElement.style.display = 'none';
        infoElement.classList.add('info');
        contactArticle.append(infoElement);

        const phoneElement = document.createElement('span');
        phoneElement.innerHTML = '&phone;';
        phoneElement.textContent += ' ' + this.phone;
        infoElement.append(phoneElement);

        const emailElement = document.createElement('span');
        emailElement.innerHTML = '&#9993;';
        emailElement.textContent += ' ' + this.email;
        infoElement.append(emailElement);


        document.getElementById(parentElementId).append(contactArticle);
        this._contactElementReference = contactArticle;
    }
}



const contacts = [
    new Contact('Ivan',   'Ivanov',  '0888 123 456', 'i.ivanov@gmail.com'),
    new Contact('Maria',  'Petrova', '0899 987 654', 'mar4eto@abv.bg'    ),
    new Contact('Jordan', 'Kirov',   '0988 456 789', 'jordk@gmail.com'   )
];

contacts.forEach(contact => contact.render('main'));

// After 1 second, change the online status to true
setTimeout(() => contacts[1].online = true, 2000);
