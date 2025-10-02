function executeCommands (commandsArr) {
    const collection = createCollection();

    for (const command of commandsArr) {
        const [commandName, commandArgument] = command.split(' ');
        collection[commandName](commandArgument);
    }

    function createCollection () {
        let collection = [];

        return {
            add (string) {
                collection.push(string);
            },

            remove (string) {
                collection = collection.filter(x => x !== string)
            },

            print () {
                console.log(collection.join(','));
            }
        };
    }
}

executeCommands(['add hello', 'add again', 'remove hello', 'add again', 'print']);
executeCommands(['add pesho', 'add george', 'add peter', 'remove peter','print']);