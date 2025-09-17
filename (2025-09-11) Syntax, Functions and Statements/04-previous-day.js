function printPreviousDay (year, month, day) {
    // The Date() constructor uses 0-based month
    // indexes (0 = Jan, 11 = Dec).

    let previousDate = new Date(year, month - 1, day - 1);
    console.log(`${previousDate.getFullYear()}-${previousDate.getMonth() + 1}-${previousDate.getDate()}`);
}

printPreviousDay(2016, 9, 30);
printPreviousDay(2015, 5, 10);