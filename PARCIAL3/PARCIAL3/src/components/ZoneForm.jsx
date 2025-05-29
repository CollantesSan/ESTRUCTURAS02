import { useState, useEffect } from "react";

export default function ZoneForm({ isOpen, onClose, onSubmit, defaultName = "", mode = "add" }) {
    const [name, setName] = useState(defaultName);

    useEffect(() => {
        setName(defaultName);
    }, [defaultName]);

    if (!isOpen) return null;

    return (
        <div className="zone-modal">
            <div className="zone-modal-content">
                <h3>{mode === "edit" ? "Editar Zona" : "Agregar Subzona"}</h3>
                <input
                    type="text"
                    value={name}
                    placeholder="Nombre de la zona"
                    onChange={(e) => setName(e.target.value)}
                />
                <div style={{ marginTop: "1rem" }}>
                    <button onClick={() => onSubmit(name)} disabled={!name.trim()}>
                        Guardar
                    </button>
                    <button onClick={onClose} style={{ marginLeft: "0.5rem", backgroundColor: "#aaa" }}>
                        Cancelar
                    </button>
                </div>
            </div>
        </div>
    );
}

