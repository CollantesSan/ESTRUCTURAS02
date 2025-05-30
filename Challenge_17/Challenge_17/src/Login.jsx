import React, { useState } from "react";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, provider } from "./firebase/config";
import { useDispatch } from "react-redux";
import { login } from "./store/slices/authSlice";
import { useNavigate } from "react-router-dom";
import styles from "./styles/Login.module.scss";
import { toast } from "react-toastify";

const Login = () => {
    const [form, setForm] = useState({ email: "", password: "" });
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChange = (e) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await signInWithEmailAndPassword(auth, form.email, form.password);
            dispatch(login());
            navigate("/Home");
        } catch (error) {
            toast.error("Credenciales inválidas o error al iniciar sesión.");
        }
    };

    const handleGoogle = async () => {
        try {
            await signInWithPopup(auth, provider);
            dispatch(login());
            navigate("/Home");
        } catch (error) {
            toast.error("No se pudo iniciar sesión con Google.");
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <h2>Iniciar Sesión</h2>
                <form onSubmit={handleSubmit}>
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
                    <button type="submit">Ingresar</button>
                </form>
                <button onClick={handleGoogle} className={styles.googleBtn}>
                    Iniciar sesión con Google
                </button>
            </div>
        </div>
    );
};

export default Login;



