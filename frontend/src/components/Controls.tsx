
type ControlsProps = {
    difficulty: string;
    onDifficultyChange: (level: string) => void;
    onNewGame: (level: string) => void;
    onSolve: () => void;
    onHint: () => void;
};

export default function Controls({
    difficulty,
    onDifficultyChange,
    onNewGame,
    onSolve,
    onHint
}: ControlsProps) {


    return (
        <div className="d-flex align-items-center justify-content-evenly gap-3 flex-wrap p-3">
            <p className="h4 mb-0">Difficulty:</p>

            <select
                className="form-select w-auto p-2"
                aria-label="Select difficulty"
                value={difficulty}
                onChange={(e) => onDifficultyChange(e.target.value)}
            >
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
            </select>

            <button
                type="button"
                className="btn btn-primary"
                onClick={() => onNewGame(difficulty)}>
                New Game
            </button>

            <button
                type="button"
                className="btn btn-success"
                onClick={() => { onSolve() }}>
                Solve
            </button>

            <button
                type="button"
                className="btn btn-warning"
                onClick={() => { onHint() }}>
                Get Hint
            </button>
        </div>
    );
}
