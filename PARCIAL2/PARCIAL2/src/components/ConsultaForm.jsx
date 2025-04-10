import { useParams, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addConsulta } from '../store/clientsSlice'
import { useState } from 'react'

const ConsultaForm = () => {
const { id } = useParams()
const navigate = useNavigate()
const dispatch = useDispatch()
const [text, setText] = useState("")

const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(addConsulta({ clientId: id, text }))
    navigate(`/cliente/${id}`)
}

return (
    <form onSubmit={handleSubmit}>
    <h2>Nueva Consulta</h2>
    <textarea value={text} onChange={(e) => setText(e.target.value)} required />
    <br />
    <button type="submit">Agregar Consulta</button>
    </form>
)
}

export default ConsultaForm
