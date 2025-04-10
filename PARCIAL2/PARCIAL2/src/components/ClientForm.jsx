import { useDispatch, useSelector } from 'react-redux';
import { addClient, addTransaction } from '../store/clientsSlice';
import { useState } from 'react';

export default function ClientForm() {
const dispatch = useDispatch();
const clients = useSelector(state => state.clients);
const [name, setName] = useState('');
const [clientId, setClientId] = useState('');
const [type, setType] = useState('consulta');
const [message, setMessage] = useState('');

const handleAddClient = () => {
    if (name.trim()) {
    dispatch(addClient(name));
    setName('');
    }
};

const handleAddTransaction = () => {
    if (clientId && message.trim()) {
    dispatch(addTransaction({ clientId, type, message }));
    setMessage('');
    }
};

return (
    <div className="card">
    <h2>Agregar Cliente</h2>
    <input
        placeholder="Nombre"
        value={name}
        onChange={e => setName(e.target.value)}
    />
    <button onClick={handleAddClient}>Agregar</button>

    <h3>Agregar Transacción</h3>
    <select value={clientId} onChange={e => setClientId(e.target.value)}>
        <option value="">Seleccione un cliente</option>
        {clients.map(c => (
        <option key={c.id} value={c.id}>{c.name}</option>
        ))}
    </select>
    <select value={type} onChange={e => setType(e.target.value)}>
        <option value="consulta">Consulta</option>
        <option value="reclamo">Reclamo</option>
    </select>
    <input
        placeholder="Mensaje"
        value={message}
        onChange={e => setMessage(e.target.value)}
    />
    <button onClick={handleAddTransaction}>Agregar</button>
    </div>
);
}
