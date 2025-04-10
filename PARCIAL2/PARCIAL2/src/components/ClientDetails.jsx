import { useNavigate } from 'react-router-dom'

const ClientDetails = ({ client }) => {
const navigate = useNavigate()

return (
    
    <div>
    <h3>Consultas</h3>
    {client.consultas.length > 0 ? (
        client.consultas.map((c, i) => (
        <button key={i} onClick={() => alert(c)}>Consulta {i + 1}</button>
        ))
    ) : (
        <p>Sin consultas</p>
    )}
<button onClick={() => navigate("/")} className="back-button">
        ← Volver al inicio
    </button>
    <h3>Reclamos</h3>
    {client.reclamos.length > 0 ? (
        client.reclamos.map((r, i) => (
        <button key={i} onClick={() => alert(r)}>Reclamo {i + 1}</button>
        ))
    ) : (
        <p>Sin reclamos</p>
    )}
    </div>
)
}

export default ClientDetails

