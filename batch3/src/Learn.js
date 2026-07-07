import { useState } from "react";
function Learn() {
    const [count, setCount] = useState(0);
    function Increment() {
        setCount(count + 1);
    }
    function Decrement() {
        setCount(count - 1);
    }
    function Reset() {
        setCount(0);
    }
    return (
        <>
            <h1>{count}</h1>
            <div style={{ display: "flex", gap: "20px" }}>
                <button onClick={Increment}>Increment</button>
                <button onClick={Decrement}>Decrement</button>
                <button onClick={Reset}>Reset</button>
            </div>
        </>
    );
}
export default Learn;