function isValidMove(board, row, col, val) {
    for (let i = 0; i < 9; i++) {
        if (board[row][i] === val || board[i][col] === val) {
            return false;
        }

        const boxRow = 3 * Math.floor(row / 3) + Math.floor(i / 3);
        const boxCol = 3 * Math.floor(col / 3) + (i % 3);

        if (board[boxRow][boxCol] === val) {
            return false;
        }
    }
    return true;
}

function isValidBoard(board) {
    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            num = board[row][col];
            if (board[row][col] !== 0) {
                board[row][col] = 0;
                if (!isValidMove(board, row, col, num)) {
                    board[row][col] = num;
                    return false;
                }
                board[row][col] = num;
            }
        }
    }
    return true;
}

module.exports = {
    isValidMove,
    isValidBoard
};