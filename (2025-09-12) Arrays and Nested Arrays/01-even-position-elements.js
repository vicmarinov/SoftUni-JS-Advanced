function printEvenPositionElements (array) {
    let result = array
        .filter((element, index) => index % 2 === 0)
        .join(' ');
    
    console.log(result);
}

printEvenPositionElements(['20', '30', '40', '50', '60']);
printEvenPositionElements(['5', '10']);