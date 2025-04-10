// src/pages/ReclamoPage.jsx
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addReclamo } from '../store/clientsSlice';
import { useState } from 'react';


function ReclamoPage() {
const { id, index } = useParams();
const client = useSelector((state) => state.clients.find((c) => c.id === id));
const dispatch = useDispatch();
const navigate = useNavigate();
const [texto, setTexto] = useState('');

if (!client) return <div>Cliente no encontrado</div>;

const isView = typeof index !== 'undefined';
const reclamoActual = isView ? client.reclamos[index] : null;

const handleSubmit = () => {
    if (texto.trim()) {
    dispatch(addReclamo({ id, texto }));
    navigate(`/clientes/${id}`);
    }
};

return (
    <div className="p-4">
    <h2 className="text-xl font-bold">
        {isView ? `Reclamo #${parseInt(index) + 1}` : 'Nuevo Reclamo'}
    </h2>

    {isView ? (
        <p className="mt-4">{reclamoActual}</p>
    ) : (
        <div className="mt-4">
        <textarea
            className="border w-full p-2"
            rows="4"
            placeholder="Escribe el reclamo..."
            value={texto}
            onChange={(e) => setTexto(e.target.value)}
        />
        <button onClick={handleSubmit} className="bg-red-600 text-white p-2 mt-2 rounded">
            Guardar Reclamo
        </button>
        </div>
    )}

    <button onClick={() => navigate(`/clientes/${id}`)} className="mt-4 block text-blue-600 underline">
        Volver
    </button>
    <button onClick={() => navigate("/")} className="back-button">← Volver al inicio
    </button>

    </div>
);
}

export default ReclamoPage;

