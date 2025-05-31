import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addChild } from '../store/slices/treeSlice';
import { v4 as uuidv4 } from 'uuid';

export default function EmployeeForm({ parentId }) {
    const dispatch = useDispatch();
    const [form, setForm] = useState({
        name: '',
        title: '',
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!form.name || !form.title) return;

        const newNode = {
            id: uuidv4(),
            name: form.name,
            title: form.title,
            children: [],
        };

        dispatch(addChild({ parentId, newNode }));
        setForm({ name: '', title: '' });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="name"
                placeholder="Nombre"
                value={form.name}
                onChange={handleChange}
            />
            <input
                type="text"
                name="title"
                placeholder="Título"
                value={form.title}
                onChange={handleChange}
            />
            <button type="submit">Agregar</button>
        </form>
    );
}
