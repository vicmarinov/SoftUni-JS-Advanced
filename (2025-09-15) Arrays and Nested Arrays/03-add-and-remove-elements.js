function addAndRemoveElements (commandsArr) {
    let numsArr = [];
    let currentNum = 1;

    for (let command of commandsArr) {
        switch (command) {
            case 'add':
                numsArr.push(currentNum);
                break;
            case 'remove':
                numsArr.pop();
                break;
        }

        currentNum++;
    }

    console.log(numsArr.join('\n') || 'Empty');
}

addAndRemoveElements(['add', 'add', 'add', 'add']);
addAndRemoveElements(['add', 'add', 'remove', 'add', 'add']);
addAndRemoveElements(['remove', 'remove', 'remove']);