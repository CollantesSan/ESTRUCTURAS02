import React, { useState } from "react";
import { Child } from "./Child";

export const Parent = () => {
    const [category, setCategory] = useState("");
    const [categories, setCategories] = useState(["first category", "second category"]);

    const handleInputChange = (event) => {
        setCategory(event.target.value);
    };

    const addCategory = () => {
        if (category.trim() === "") return;
        setCategories([...categories, category]);
        setCategory(""); // Limpiar input
    };

    return (
        <div className="container">
            <h2>Administrar Categorías</h2>

            <div className="input-container">
                <input
                    type="text"
                    value={category}
                    onChange={handleInputChange}
                    placeholder="Escribe una categoría"
                />
                <button className="btn-add" onClick={addCategory}>
                    Agregar Categoría
                </button>
            </div>

            <ol className="category-list">
                {categories.map((cat, index) => (
                    <li key={index}>{cat}</li>
                ))}
            </ol>

            <Child counter={categories.length} onCallParentFn={setCategories} />
        </div>
    );
};