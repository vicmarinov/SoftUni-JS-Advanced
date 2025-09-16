function getDaysInMonth (month, year) {
    // The Date() constructor uses 0-based month indexes (0 = Jan,
    // 11 = Dec). So passing 'month' here as 1-based makes it refer
    // to the next month. Setting the day to 0 returns the last day
    // of the previous month.

    let lastDate = new Date(year, month, 0);
    console.log(lastDate.getDate());
}

getDaysInMonth(1, 2012);
getDaysInMonth(2, 2021);
getDaysInMonth(2, 2020);