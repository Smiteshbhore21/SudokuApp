const { isValidMove } = require("../utils/validator");

function solveSudoku(board) {
    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            if (board[row][col] === 0) {
                for (let val = 1; val < 10; val++) {
                    if (isValidMove(board, row, col, val)) {
                        board[row][col] = val;
                        if (solveSudoku(board)) {
                            return true;
                        }
                        board[row][col] = 0;
                    }
                }
                return false;
            }
        }
    }
    return true;
}

module.exports = {
    solveSudoku,
};