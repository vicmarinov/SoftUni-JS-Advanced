function ticTacToe (commandsArr) {
    function checkForVictory (board) {
        for (let i = 0; i < board.length; i++) {
            if (board[i][0] !== false && board[i][0] === board[i][1] && board[i][1] === board[i][2]) {
                return true;
            }

            if (board[0][i] !== false && board[0][i] === board[1][i] && board[1][i] === board[2][i]) {
                return true;
            }
        }

        if (board[0][0] !== false && board[0][0] === board[1][1] && board[1][1] === board[2][2]) {
            return true;
        }

        if (board[0][2] !== false && board[0][2] === board[1][1] && board[1][1] === board[2][0]) {
            return true;
        }

        return false;
    }

    function checkForFullBoard (board) {
        return board.flat().filter(x => x === false).length === 0;
    }

    function printBoard (board) {
        board.forEach(row => console.log(row.join('\t')));
    }

    let board = [[false, false, false],
                 [false, false, false],
                 [false, false, false]];
    
    let player = 'X';

    for (let command of commandsArr) {
        let [commandX, commandY] = command.split(' ');
        commandX = Number(commandX);
        commandY = Number(commandY);

        if (board[commandX][commandY] !== false) {
            console.log('This place is already taken. Please choose another!');
            continue;
        }

        board[commandX][commandY] = player;

        if (checkForVictory(board)) {
            console.log(`Player ${player} wins!`);
            printBoard(board);
            break;
        }

        if (checkForFullBoard(board)) {
            console.log('The game ended! Nobody wins :(');
            printBoard(board);
            break;
        }

        player = player === 'X' ? 'O' : 'X';
    }
}

ticTacToe([
    '0 1',
    '0 0',
    '0 2',
    '2 0',
    '1 0',
    '1 1',
    '1 2',
    '2 2',
    '2 1',
    '0 0'
]);

ticTacToe([
    '0 0',
    '0 0',
    '1 1',
    '0 1',
    '1 2',
    '0 2',
    '2 2',
    '1 2',
    '2 2',
    '2 1'
]);

ticTacToe([
    '0 1',
    '0 0',
    '0 2',
    '2 0',
    '1 0',
    '1 2',
    '1 1',
    '2 1',
    '2 2',
    '0 0'
]);