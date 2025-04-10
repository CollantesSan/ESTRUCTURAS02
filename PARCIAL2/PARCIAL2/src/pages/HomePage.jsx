// src/pages/HomePage.jsx
import { useSelector, useDispatch } from 'react-redux';
import { addClient } from '../store/clientsSlice';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function HomePage() {
const clients = useSelector((state) => state.clients);
const dispatch = useDispatch();
const [nombre, setNombre] = useState('');

const handleAdd = () => {
    if (nombre.trim()) {
    dispatch(addClient(nombre));
    setNombre('');
    }
};

return (
    <div className="p-4">
    <h1 className="text-xl font-bold mb-4">Lista de Clientes</h1>
    <input
        type="text"
        placeholder="Nombre del cliente"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        className="border p-2 mr-2"
    />
    <button onClick={handleAdd} className="bg-blue-500 text-white p-2 rounded">Agregar Cliente</button>
    <ul className="mt-4">
        {clients.map((c, i) => (
        <li key={c.id} className="mt-2">
            <Link to={`/clientes/${c.id}`} className="text-blue-700 underline">
            {i + 1}. {c.nombre}
            </Link>
        </li>
        ))}
    </ul>
    </div>
);
}

export default HomePage;

