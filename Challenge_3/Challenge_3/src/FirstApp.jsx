import { useState } from "react";

const FirstApp = ({ value }) => {
    const [initialValue] = useState(Number(value) || 0); // Almacena el valor inicial
    const [counter, setCounter] = useState(initialValue);

    const handleAdd = () => setCounter(counter + 1);
    const handleSubtract = () => setCounter(counter - 1);
    const handleReset = () => setCounter(initialValue); // Usa el valor inicial

    return (
        <>
            <h1>Counter</h1>
            <span> { counter } </span>
            <button onClick={handleAdd}> +1 </button>
            <button onClick={handleSubtract}> -1 </button>
            <button onClick={handleReset}> Reset </button>
        </>
    );
}

export default FirstApp;