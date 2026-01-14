import type { Board } from "../types/Sudoku";
import Cell from "./Cell";
import { hasConflict } from "../utils/validation";

interface Props {
    board: Board,
    initialBoard: Board;
    setBoard: (board: Board) => void;
}

export default function SudokuGrid({ board, initialBoard, setBoard }: Props) {

    const updateCell = (row: number, col: number, value: number) => {
        if (initialBoard[row][col] !== 0) return;

        const newBoard = board.map(r => [...r]);
        newBoard[row][col] = value;
        setBoard(newBoard);
    }

    return (
        <div className="d-flex justify-content-center">
            <div
                className="mx-auto border border-dark"
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(9, 1fr)",
                    width: "min(90vw, 420px)",
                    aspectRatio: "1 / 1",
                }}
            >
                {board.map((row, r) =>
                    row.map((value, c) => (
                        <Cell
                            key={`${r}-${c}`}
                            value={value}
                            row={r}
                            col={c}
                            fixed={initialBoard[r][c] !== 0}
                            hasError={hasConflict(board, r, c, value)}
                            onChange={(val) => updateCell(r, c, val)}
                        />
                    ))
                )}
            </div>
        </div>
    );

}