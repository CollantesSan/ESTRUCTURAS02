// src/components/ClientList.jsx
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const ClientList = () => {
const clients = useSelector((state) => state.clients)

return (
    <div>
    <h2>Clientes</h2>
    <ul>
        {clients.map((client, index) => (
        <li key={client.id}>
            <Link to={`/cliente/${client.id}`}>{client.name}</Link>
        </li>
        ))}
    </ul>
    </div>
)
}

export default ClientList

