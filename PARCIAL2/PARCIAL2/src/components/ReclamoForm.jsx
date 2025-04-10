import { useParams, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addReclamo } from '../store/clientsSlice'
import { useState } from 'react'

const ReclamoForm = () => {
const { id } = useParams()
const navigate = useNavigate()
const dispatch = useDispatch()
const [text, setText] = useState("")

const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(addReclamo({ clientId: id, text }))
    navigate(`/cliente/${id}`)
}

return (
    <form onSubmit={handleSubmit}>
    <h2>Nuevo Reclamo</h2>
    <textarea value={text} onChange={(e) => setText(e.target.value)} required />
    <br />
    <button type="submit">Agregar Reclamo</button>
    </form>
)
}

export default ReclamoForm
