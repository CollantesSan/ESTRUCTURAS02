import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "./firebase/config";
import { doc, setDoc } from "firebase/firestore";
import { useDispatch } from "react-redux";
import { login } from "./store/slices/authSlice";
import { useNavigate } from "react-router-dom";
import styles from "./styles/Registro.module.scss";
import { toast } from "react-toastify";

const Registro = () => {
    const [form, setForm] = useState({
        nombre: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (form.password !== form.confirmPassword) {
            toast.error("Las contraseñas no coinciden.");
            setForm({ ...form, password: "", confirmPassword: "" });
            return;
        }

        try {
            const cred = await createUserWithEmailAndPassword(auth, form.email, form.password);
            await setDoc(doc(db, "usuarios", cred.user.uid), {
                nombre: form.nombre,
                email: form.email,
            });
            dispatch(login());
            navigate("/Home");
        } catch (error) {
            toast.error("Error al registrar el usuario.");
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <h2>Registro</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="nombre"
                        placeholder="Nombre completo"
                        value={form.nombre}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Correo"
                        value={form.email}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Contraseña"
                        value={form.password}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirmar contraseña"
                        value={form.confirmPassword}
                        onChange={handleChange}
                        required
                    />
                    <button type="submit">Registrarse</button>
                </form>
            </div>
        </div>
    );
};

export default Registro;




