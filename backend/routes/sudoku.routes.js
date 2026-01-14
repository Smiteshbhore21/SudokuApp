const express = require('express');
const router = express.Router();

const { solveBoard, validateBoard, getHint, newGame } = require('../controllers/sudoku.controller');

router.post('/solve', solveBoard);

router.post('/validate', validateBoard);

router.post('/hint', getHint);

router.get('/new', newGame);

module.exports = router;