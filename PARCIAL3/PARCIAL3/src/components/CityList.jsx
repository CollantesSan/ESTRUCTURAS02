import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { db } from "../firebase/firebaseConfig";
import {
    collection,
    getDocs,
    deleteDoc,
    doc,
} from "firebase/firestore";

export default function CityList() {
    const [cities, setCities] = useState([]);

    const fetchCities = async () => {
        const snapshot = await getDocs(collection(db, "cities"));
        const result = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
        }));
        setCities(result);
    };

    const handleDelete = async (id) => {
        const confirmDelete = confirm("¿Estás seguro de eliminar esta ciudad?");
        if (!confirmDelete) return;

        await deleteDoc(doc(db, "cities", id));
        await fetchCities();
    };

    useEffect(() => {
        fetchCities();
    }, []);

    return (
        <div>
            <h3 className="section-title">Ciudades registradas</h3>
            <ul className="city-list">
                {cities.map(city => (
                    <li key={city.id} className="city-item">
                        <span>
                            <strong>{city.name}</strong> -{" "}
                            <Link to={`/city/${city.id}`}>Ver detalle</Link>
                        </span>
                        <button className="delete-btn" onClick={() => handleDelete(city.id)}>
                            🗑 Eliminar
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}



