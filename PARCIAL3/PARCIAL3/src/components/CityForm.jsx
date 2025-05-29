// src/components/CityForm.jsx
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addCity } from "../redux/citiesSlice";
import { ZoneNode } from "../data/ZoneNode";
import { db } from "../firebase/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

export default function CityForm() {
    const [name, setName] = useState("");
    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!name.trim()) return;

        const rootZone = new ZoneNode("Zona Principal");

        // Firebase
        const docRef = await addDoc(collection(db, "cities"), {
            name,
            connections: [],
            greenZoneRoot: rootZone.toJSON(),
        });

        // Redux local (opcional para sincronizar visualización)
        dispatch(addCity({ name }));

        setName("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <h3>Añadir ciudad</h3>
            <input
                type="text"
                value={name}
                placeholder="Nombre de la ciudad"
                onChange={(e) => setName(e.target.value)}
            />
            <button type="submit">Guardar ciudad</button>
        </form>
    );
}
