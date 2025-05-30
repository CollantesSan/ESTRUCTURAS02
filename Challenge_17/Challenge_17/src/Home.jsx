import React, { useEffect, useState } from "react";
import { auth, db } from "./firebase/config";
import { signOut } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import styles from "./styles/Home.module.scss";

const Home = () => {
    const [usuario, setUsuario] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const obtenerDatos = async () => {
            const user = auth.currentUser;
            if (user) {
                const ref = doc(db, "usuarios", user.uid);
                const snap = await getDoc(ref);
                if (snap.exists()) {
                    setUsuario(snap.data());
                }
            }
        };

        obtenerDatos();
    }, []);

    const cerrarSesion = async () => {
        await signOut(auth);
        navigate("/Login");
    };

    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <h2>¡Bienvenido/a!</h2>
                {usuario ? (
                    <>
                        <p><strong>Nombre:</strong> {usuario.nombre}</p>
                        <p><strong>Correo:</strong> {usuario.email}</p>
                    </>
                ) : (
                    <p>Cargando datos...</p>
                )}
                <button onClick={cerrarSesion}>Cerrar sesión</button>
            </div>
        </div>
    );
};

export default Home;


