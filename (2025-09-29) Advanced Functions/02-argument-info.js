function printArgumentsInfo(...args) {
    const tally = new Map();

    args.forEach(arg => {
        const argType = typeof arg;
        tally.set(argType, (tally.get(argType) || 0) + 1);
        console.log(`${argType}: ${arg}`);
    });

    const sortedTallyEntries = Array.from(tally)
        .sort((entry1, entry2) => entry2[1] - entry1[1]);

    for (const [type, count] of sortedTallyEntries) {
        console.log(`${type} = ${count}`);
    }
}

printArgumentsInfo(
    'cat',
    42,
    function () {
        console.log('Hello world!');
    }
);