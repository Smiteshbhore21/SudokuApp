import type { Board } from "../types/Sudoku";

export function isBoardComplete(board: Board): boolean {
    for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
            if (board[r][c] === 0) return false;
        }
    }
    return true;
}
