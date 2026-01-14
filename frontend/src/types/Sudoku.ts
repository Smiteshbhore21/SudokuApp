export type Board = number[][];

interface HintResponse {
    row: number;
    col: number;
    value: number;
    message?: string;
}

interface SolveResponse {
    solved: boolean;
    board: Board;
}

export type {
    HintResponse,
    SolveResponse
};

