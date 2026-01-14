import type { HintResponse, SolveResponse, Board } from "../types/Sudoku";

const BASE_URL = "http://localhost:8000/api/sudoku";

export async function fetchNewGame(difficulty: string): Promise<Board> {
    const res = await fetch(`${BASE_URL}/new?difficulty=${difficulty}`);
    const data = await res.json();
    return data.board;
}

export async function solveBoard(board: Board): Promise<SolveResponse> {
    const res = await fetch(`${BASE_URL}/solve`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ board })
    });
    return res.json();
}

export async function getHint(board: Board): Promise<HintResponse> {
    const res = await fetch(`${BASE_URL}/hint`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ board })
    });
    return res.json();
}