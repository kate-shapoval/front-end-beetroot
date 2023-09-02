import { useState } from "react";

export default function ResT() {
    const [out1, setOut1] = useState(0)
    function plus() {
        setOut1(out1 + 1)
    }
    function minus() {
        setOut1(out1 - 1)
    }
    return (
        <>
            <h2>Counter</h2>
            <button onClick={plus}>+</button>
            <span>{out1}</span>
            <button onClick={minus}>-</button>
        </>
    );
}