interface Props {
    value: number;
    row: number;
    col: number;
    fixed: boolean;
    hasError: boolean;
    onChange: (val: number) => void;
}

export default function Cell({ value, row, col, fixed, hasError, onChange }: Props) {

    const thickRight = (col + 1) % 3 === 0 && col !== 8;
    const thickBottom = (row + 1) % 3 === 0 && row !== 8;

    return (
        <input
            type="text"
            value={value === 0 ? "" : value}
            maxLength={1}
            onChange={(e) => {
                const v = Number(e.target.value);
                if (v >= 1 && v <= 9) onChange(v);
                else if (e.target.value === "") onChange(0);
            }}
            className="form-control text-center fw-semibold"
            style={{
                width: "48px",
                height: "48px",
                fontSize: "1.1rem",
                fontWeight: fixed ? "bold" : "normal",
                borderRight: thickRight ? "3px solid gray" : "1px solid #ccc",
                borderBottom: thickBottom ? "3px solid gray" : "1px solid #ccc",
                border: hasError ? "2px solid red" : "1px solid #333"
            }}
        />
    );
}