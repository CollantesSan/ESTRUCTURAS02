// src/components/ZoneTree.jsx
import { useState } from "react";

export default function ZoneTree({ node, onEdit, onAddChild, selectedId, onSelect }) {
    const isSelected = selectedId === node.id;

    return (
        <div style={{ marginLeft: 20 }}>
            <div
                style={{
                    fontWeight: isSelected ? "bold" : "normal",
                    backgroundColor: isSelected ? "#d2f0ff" : "transparent",
                    cursor: "pointer"
                }}
                onClick={() => onSelect(node.id)}
            >
                🌿 {node.name}
            </div>

            <button onClick={() => onEdit(node.id)}>✏️ Editar</button>
            <button onClick={() => onAddChild(node.id)}>➕ Subzona</button>

            {node.children.map(child => (
                <ZoneTree
                    key={child.id}
                    node={child}
                    onEdit={onEdit}
                    onAddChild={onAddChild}
                    onSelect={onSelect}
                    selectedId={selectedId}
                />
            ))}
        </div>
    );
}
