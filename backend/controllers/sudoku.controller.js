const { solveSudoku } = require("../solver/sudokuSolver");
const { isValidBoard } = require("../utils/validator");
const { generatePuzzle } = require("../solver/sudokuGenerator");

const solveBoard = (req, res) => {
    const { board } = req.body;

    if (!board || board.length != 9) {
        return res.status(400).json({ error: "Invalid board format" });
    }

    const boardCopy = board.map(row => [...row]);

    if (!isValidBoard(boardCopy)) {
        return res.status(400).json({ error: "Board is invalid" });
    }

    const solvable = solveSudoku(boardCopy);

    if (!solvable) {
        return res.status(400).json({ error: "Board is unsolvable" });
    }

    return res.status(200).json({
        solved: true,
        board: boardCopy
    });
}

const validateBoard = (req, res) => {
    const { board } = req.body;

    if (!board || board.length !== 9) {
        return res.status(400).json({ valid: false });
    }

    const boardCopy = board.map(row => [...row]);
    const valid = isValidBoard(boardCopy);

    return res.json({ valid });
};

const getHint = (req, res) => {
    const { board } = req.body;

    if (!board || board.length !== 9) {
        return res.status(400).json({ error: "Invalid board format" });
    }

    const boardCopy = board.map(row => [...row]);

    if (!isValidBoard(boardCopy)) {
        return res.status(400).json({ error: "Board is invalid" });
    }

    const solvedBoard = board.map(row => [...row]);

    const solvable = solveSudoku(solvedBoard);
    if (!solvable) {
        return res.status(400).json({ error: "Board is unsolvable" });
    }

    for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
            if (board[r][c] === 0) {
                return res.json({
                    row: r,
                    col: c,
                    value: solvedBoard[r][c]
                });
            }
        }
    }

    return res.json({ message: "Board already complete" });
};

const newGame = (req, res) => {
    const { difficulty } = req.query;

    const puzzle = generatePuzzle(difficulty);

    return res.status(200).json({
        difficulty: difficulty || "medium",
        board: puzzle
    });
}


module.exports = {
    solveBoard,
    validateBoard,
    getHint,
    newGame
};