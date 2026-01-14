const { solveSudoku } = require('./sudokuSolver');

function fillDiagonal(board) {
    for (let i = 0; i < 9; i += 3) {
        let nums = shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9]);
        let idx = 0;
        for (let r = i; r < i + 3; r++) {
            for (let c = i; c < i + 3; c++) {
                board[r][c] = nums[idx++];
            }
        }
    }
}

function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]]
    }
    return arr;
}

function generateSolvedBoard() {
    const board = Array.from({ length: 9 }, () => Array(9).fill(0));
    fillDiagonal(board);
    solveSudoku(board);
    return board;
}

function removeCells(board, difficulty) {
    const difficultyMap = {
        easy: 35,
        medium: 45,
        hard: 55
    };

    let cellsToRemove = difficultyMap[difficulty] || 45;

    while (cellsToRemove > 0) {
        const row = Math.floor(Math.random() * 9);
        const col = Math.floor(Math.random() * 9);

        if (board[row][col] !== 0) {
            board[row][col] = 0;
            cellsToRemove--;
        }
    }
}

function generatePuzzle(difficulty = "medium") {
    const solvedBoard = generateSolvedBoard();
    const puzzleBoard = solvedBoard.map(row => [...row]);

    removeCells(puzzleBoard, difficulty);

    return puzzleBoard;
}

module.exports = {
    generatePuzzle,
};