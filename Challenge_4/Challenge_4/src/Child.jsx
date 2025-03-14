import React from "react";

export const Child = ({ counter, onCallParentFn }) => {
    return (
        <button className="btn-delete" onClick={() => onCallParentFn([])}>
            Vaciar Categorías ({counter})
        </button>
    );
};