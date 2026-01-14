const express = require('express');
const cors = require("cors");
const sudokuRoutes = require('../routes/sudoku.routes');

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/sudoku", sudokuRoutes);

app.get("/", (req, res) => {
    res.send("Sudoku API is running");
});

module.exports = app;