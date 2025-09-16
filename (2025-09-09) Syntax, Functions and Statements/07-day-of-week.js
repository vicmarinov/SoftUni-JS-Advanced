function getDayOfWeekNo (dayOfWeekAsStr) {
    let output;

    switch (dayOfWeekAsStr) {
        case 'Monday':    output = 1; break;
        case 'Tuesday':   output = 2; break;
        case 'Wednesday': output = 3; break;
        case 'Thursday':  output = 4; break;
        case 'Friday':    output = 5; break;
        case 'Saturday':  output = 6; break;
        case 'Sunday':    output = 7; break;
        default:
            output = 'error';
            break;
    }

    console.log(output);
}

// Alternative solution
// --------------------

// function getDayOfWeekNo (dayOfWeekAsStr) {
//     const daysOfWeek = {
//         'Monday': 1,
//         'Tuesday': 2,
//         'Wednesday': 3,
//         'Thursday': 4,
//         'Friday': 5,
//         'Saturday': 6,
//         'Sunday': 7
//     };

//     console.log(daysOfWeek[dayOfWeekAsStr] ? daysOfWeek[dayOfWeekAsStr] : 'error');
// }

getDayOfWeekNo('Monday');
getDayOfWeekNo('Friday');
getDayOfWeekNo('Invalid');