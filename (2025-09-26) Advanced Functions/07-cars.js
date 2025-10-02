function executeCommands (commandsArr) {
    const objectsFactory = createObjectsFactory();

    for (const command of commandsArr) {
        if (command.startsWith('create ') && command.includes(' inherit ')) {
            const [_, name, __, parentName] = command.split(' ');
            objectsFactory.createInheritingObject(name, parentName);

        } else if (command.startsWith('create ')) {
            const [_, name] = command.split(' ');
            objectsFactory.createObject(name);

        } else if (command.startsWith('set ')) {
            const [_, name, key, value] = command.split(' ');
            objectsFactory.set(name, key, value);

        } else if (command.startsWith('print ')) {
            const [_, name] = command.split(' ');
            objectsFactory.print(name);
        }
    }

    function createObjectsFactory () {
        const objects = new Map();
        const inheritances = new Map(); // objName: [parentObj, parentObj, ...]

        return {
            createObject (name) {
                objects.set(name, {});
            },

            createInheritingObject (name, parentName) {
                if (!objects.has(parentName)) return;

                if (!objects.has(name)) this.createObject(name);

                if (!inheritances.has(name)) inheritances.set(name, []);

                inheritances.set(name, [...inheritances.get(name), parentName]);

                for (let parentNameOfParentName of inheritances.get(parentName) || []) {
                    this.createInheritingObject(name, parentNameOfParentName);
                }
            },
            

            set (name, key, value) {
                const object = objects.get(name);
                object[key] = value;
            },

            print (name) {
                this._updateInheritances(name);

                const object = objects.get(name);

                console.log(
                    Object.entries(object)
                        .map(entry => entry[0] + ':' + entry[1])
                        .join(',')
                );
            },

            _updateInheritances (name) {
                if (!inheritances.has(name)) return;

                const object = objects.get(name);

                for (const parentName of inheritances.get(name)) {
                    const parentObject = objects.get(parentName);

                    for (const key in parentObject) {
                        if (object.hasOwnProperty(key)) continue;
                        object[key] = parentObject[key];
                    }
                }
            }
        };
    }
}

executeCommands(
    [
        'create c1',
        'create c2 inherit c1',
        'set c1 color red',
        'set c2 model new',
        'print c1',
        'print c2'
    ]
);


executeCommands(
    [
        'create pesho',
        'create gosho inherit pesho',
        'create stamat inherit gosho',
        'set pesho rank number1',
        'set gosho nick goshko',
        'print stamat'
    ]
);