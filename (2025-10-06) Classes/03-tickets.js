function getTicketsStatistics (inputArr, sortingCriteria) {
    class Ticket {
        destination;
        price;
        status;

        constructor (destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }

        static getSortedTickets (ticketsArray, sortingCriteria) {
            return ticketsArray
                .slice()
                .sort((ticketA, ticketB) => {
                    if (sortingCriteria === 'price') {
                        return ticketA.price - ticketB.price;
                    }
                
                    return ticketA[sortingCriteria]
                        .localeCompare(ticketB[sortingCriteria]);
                });
        }
    }

    const ticketsArr = [];

    for (let input of inputArr) {
        let [destination, price, status] = input.split('|');
        price = Number(price);

        ticketsArr.push(new Ticket(destination, price, status));
    }

    return Ticket.getSortedTickets(ticketsArr, sortingCriteria);
}

console.log(getTicketsStatistics(
    [
        'Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'
    ],
    'destination'
));

console.log(getTicketsStatistics(
    [
        'Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'
    ],
    'status'
));