function printListOfNames (namesArr) {
    namesArr
        .slice()
        .sort((a, b) => a.localeCompare(b))
        .forEach((name, index) => console.log(`${index + 1}.${name}`));
}

// Alternative solution
// --------------------

// function printListOfNames (namesArr) {
//     console.log(
//         namesArr
//             .slice()
//             .sort((a, b) => a.localeCompare(b))
//             .map((name, index) => `${index + 1}.${name}`)
//             .join('\n')
//     );
// }

printListOfNames(['John', 'Bob', 'Christina', 'Ema']);