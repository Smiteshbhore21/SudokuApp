import { useEffect, useState } from "react";
import type { Board } from '../types/Sudoku';
import { fetchNewGame, solveBoard, getHint } from '../services/SudokuApi';
import Controls from '../components/Controls';
import SudokuGrid from "../components/SudokuGrid";
import { isBoardComplete } from "../utils/gameStatus";

const emptyBoard: Board = Array.from({ length: 9 }, () =>
    Array(9).fill(0)
);

export default function Game() {
    const [board, setBoard] = useState<Board>(emptyBoard);
    const [initialBoard, setInitialBoard] = useState<Board>(emptyBoard);
    const [difficulty, setDifficulty] = useState("medium");
    const [completed, setCompleted] = useState(false);

    useEffect(() => {
        setCompleted(isBoardComplete(board));
    }, [board]);

    useEffect(() => {
        startNewGame(difficulty);
    }, []);

    const startNewGame = async (level: string) => {
        const newBoard = await fetchNewGame(level);
        setDifficulty(level);
        setBoard(newBoard);
        setInitialBoard(newBoard.map(row => [...row]));
        setCompleted(false);
    }

    const handleSolve = async () => {
        const res = await solveBoard(board);
        if (res.solved) {
            console.log("Solved board");
            setBoard(res.board);
        }
    };

    const handleHint = async () => {
        const hint = await getHint(board);
        if (!("row" in hint)) return;

        const newBoard = board.map(row => [...row]);
        newBoard[hint.row][hint.col] = hint.value;
        setBoard(newBoard);
    };

    return (
        <div className="container py-4 text-center">
            <h1 className="mb-4 fw-bold">🧩 Sudoku</h1>

            <Controls
                difficulty={difficulty}
                onDifficultyChange={setDifficulty}
                onNewGame={startNewGame}
                onSolve={handleSolve}
                onHint={handleHint}
            />

            <div className="mt-4">
                <SudokuGrid
                    board={board}
                    initialBoard={initialBoard}
                    setBoard={setBoard}
                />

                {completed && (
                    <div className="toast show position-fixed bottom-0 end-0 m-4" role="alert">
                        <div className="d-flex">
                            <div className="toast-body fw-semibold">
                                🎉 Congratulations! <br />You solved the Sudoku!
                            </div>
                            <button
                                type="button"
                                className="btn-close me-2 m-auto"
                                onClick={() => setCompleted(false)}
                            />
                        </div>
                    </div>
                )}

            </div>
        </div>
    );
}