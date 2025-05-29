// src/components/CityConnector.jsx
import { useEffect, useState } from "react";
import { db } from "../firebase/firebaseConfig";
import { collection, getDocs, doc, updateDoc, getDoc } from "firebase/firestore";

export default function CityConnector() {
    const [cities, setCities] = useState([]);
    const [sourceId, setSourceId] = useState("");
    const [targetId, setTargetId] = useState("");

    useEffect(() => {
        const fetchCities = async () => {
            const snapshot = await getDocs(collection(db, "cities"));
            const result = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data(),
            }));
            setCities(result);
        };
        fetchCities();
    }, []);

    const handleConnect = async () => {
        if (!sourceId || !targetId || sourceId === targetId) {
            alert("Selecciona dos ciudades distintas.");
            return;
        }

        const sourceRef = doc(db, "cities", sourceId);
        const targetRef = doc(db, "cities", targetId);

        const sourceSnap = await getDoc(sourceRef);
        const targetSnap = await getDoc(targetRef);

        if (!sourceSnap.exists() || !targetSnap.exists()) return;

        const sourceData = sourceSnap.data();
        const targetData = targetSnap.data();

        const updatedSource = [...new Set([...(sourceData.connections || []), targetId])];
        const updatedTarget = [...new Set([...(targetData.connections || []), sourceId])];

        await updateDoc(sourceRef, { connections: updatedSource });
        await updateDoc(targetRef, { connections: updatedTarget });

        alert("¡Ciudades conectadas con éxito!");
        setSourceId("");
        setTargetId("");
    };

    return (
        <div style={{ marginTop: "2rem" }}>
            <h3>Conectar ciudades</h3>
            <div>
                <label>Ciudad A:</label>
                <select value={sourceId} onChange={(e) => setSourceId(e.target.value)}>
                    <option value="">Selecciona</option>
                    {cities.map(city => (
                        <option key={city.id} value={city.id}>{city.name}</option>
                    ))}
                </select>
            </div>
            <div>
                <label>Ciudad B:</label>
                <select value={targetId} onChange={(e) => setTargetId(e.target.value)}>
                    <option value="">Selecciona</option>
                    {cities.map(city => (
                        <option key={city.id} value={city.id}>{city.name}</option>
                    ))}
                </select>
            </div>
            <button onClick={handleConnect}>Conectar</button>
        </div>
    );
}

