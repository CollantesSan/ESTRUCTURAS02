import { useSelector } from 'react-redux';
import { useParams, Link, useNavigate } from 'react-router-dom';

function ClientePage() {
const { id } = useParams();
const clients = useSelector((state) => state.clients);
const index = clients.findIndex((c) => c.id === id);
const client = clients[index];
const navigate = useNavigate();

if (!client) return <div>Cliente no encontrado</div>;

const prev = clients[index - 1]?.id;
const next = clients[index + 1]?.id;

return (
    <div className="p-4">
      {/* Botón para volver al inicio */}
    <button
        onClick={() => navigate('/')}
        className="mb-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
    >
        ← Volver al inicio
    </button>

    <h2 className="text-2xl font-bold">{client.nombre}</h2>

    <div className="mt-4">
        <button
        onClick={() => prev && navigate(`/clientes/${prev}`)}
        className="bg-gray-300 p-2 mr-2 rounded"
        >
        Anterior
        </button>
        <button
        onClick={() => next && navigate(`/clientes/${next}`)}
        className="bg-gray-300 p-2 rounded"
        >
        Siguiente
        </button>
    </div>

    <div className="mt-6">
        <h3 className="text-lg font-semibold">Consultas</h3>
        <ul>
        {client.consultas.map((consulta, i) => (
            <li key={i}>
            <Link
                to={`/clientes/${client.id}/consulta/${i}`}
                className="text-blue-600 underline"
            >
                Consulta #{i + 1}
            </Link>
            </li>
        ))}
        </ul>
        <Link
        to={`/clientes/${client.id}/consulta`}
        className="block mt-2 bg-green-500 text-white p-2 rounded w-fit"
        >
        Agregar Consulta
        </Link>
    </div>

    <div className="mt-6">
        <h3 className="text-lg font-semibold">Reclamos</h3>
        <ul>
        {[...client.reclamos].reverse().map((reclamo, i) => (
            <li key={i}>
            <Link
                to={`/clientes/${client.id}/reclamo/${client.reclamos.length - 1 - i}`}
                className="text-red-600 underline"
            >
                Reclamo #{client.reclamos.length - i}
            </Link>
            </li>
        ))}
        </ul>
        <Link
        to={`/clientes/${client.id}/reclamo`}
        className="block mt-2 bg-red-500 text-white p-2 rounded w-fit"
        >
        Agregar Reclamo
        </Link>
    </div>
    </div>
);
}

export default ClientePage;






