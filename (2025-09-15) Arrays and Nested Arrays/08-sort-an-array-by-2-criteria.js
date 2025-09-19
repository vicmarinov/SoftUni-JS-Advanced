function printSortedArrByTwoCriteria (stringsArr) {
    stringsArr
        .slice()
        .sort((a, b) => a.length - b.length || a.localeCompare(b))
        .forEach(x => console.log(x));
}

// Alternative solution
// --------------------

// function printSortedArrByTwoCriteria (stringsArr) {
//     console.log(
//         stringsArr
//             .slice()
//             .sort((a, b) => a.length - b.length || a.localeCompare(b))
//             .join('\n')
//     );
// }

printSortedArrByTwoCriteria(['alpha', 'beta', 'gamma']);
printSortedArrByTwoCriteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);
printSortedArrByTwoCriteria(['test', 'Deny', 'omen', 'Default']);