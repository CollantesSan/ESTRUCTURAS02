import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { editNode } from '../store/slices/treeSlice';

export default function EmployeeEditor({ employee }) {
    const dispatch = useDispatch();
    const [form, setForm] = useState({
        name: employee.name,
        title: employee.title,
    });

    // 🔁 Actualiza el formulario si el empleado cambia
    useEffect(() => {
        setForm({
            name: employee.name,
            title: employee.title,
        });
    }, [employee]);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(editNode({ nodeId: employee.id, ...form }));
    };

    return (
        <form onSubmit={handleSubmit}>
            <h3>Editar empleado</h3>
            <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Nombre"
            />
            <input
                type="text"
                name="title"
                value={form.title}
                onChange={handleChange}
                placeholder="Título"
            />
            <button type="submit">Guardar</button>
        </form>
    );
}

