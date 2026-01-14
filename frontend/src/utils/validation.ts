import type { Board } from "../types/Sudoku";

export function hasConflict(
    board: Board,
    row: number,
    col: number,
    value: number
): boolean {

    if (value === 0)
        return false;

    // Row check
    for (let c = 0; c < 9; c++) {
        if (c !== col && board[row][c] === value) {
            return true;
        }
    }

    // Column check
    for (let r = 0; r < 9; r++) {
        if (r !== row && board[r][col] === value) {
            return true;
        }
    }

    // 3×3 box check
    const startRow = Math.floor(row / 3) * 3;
    const startCol = Math.floor(col / 3) * 3;

    for (let r = startRow; r < startRow + 3; r++) {
        for (let c = startCol; c < startCol + 3; c++) {
            if ((r !== row || c !== col) && board[r][c] === value) {
                return true;
            }
        }
    }

    return false;
}
