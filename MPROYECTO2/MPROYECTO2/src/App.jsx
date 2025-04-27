import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase/firebase';
import { suscribirCatalogo, suscribirLibrosPrestados, suscribirColas } from './firebase/firebaseService';

import AgregarLibro from './components/AgregarLibro';
import CatalogoLibros from './components/CatalogoLibros';
import HistorialDevoluciones from './components/HistorialDevoluciones';
import ColaEspera from './components/ColaEspera';
import Login from './components/Login';
import Register from './components/Register';
import Navbar from './components/Navbar';
import Home from './components/Home';

import './App.css';

function App() {
  const [usuarioActual, setUsuarioActual] = useState(null);
  const [loading, setLoading] = useState(true);

  const [catalogo, setCatalogo] = useState([]);
  const [devoluciones, setDevoluciones] = useState([]);
  const [colas, setColas] = useState({});
  const [librosPrestados, setLibrosPrestados] = useState([]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUsuarioActual(user);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const unsubCatalogo = suscribirCatalogo(setCatalogo);
    const unsubPrestados = suscribirLibrosPrestados(setLibrosPrestados);
    const unsubColas = suscribirColas(setColas);
    return () => {
      unsubCatalogo();
      unsubPrestados();
      unsubColas();
    };
  }, []);

  if (loading) {
    return <div>Cargando...</div>;
  }

  return (
    <Router>
      <div>
        {/* Navbar fija arriba */}
        {usuarioActual && (
          <Navbar usuarioActual={usuarioActual} setUsuarioActual={setUsuarioActual} />
        )}

        {/* Aquí empieza el layout de 3 columnas en TODAS las páginas */}
        <div className="layout-home">
          <div className="columna-lateral"></div>

          <div className="columna-centro">
            <Routes>
              {/* Rutas públicas */}
              <Route path="/login" element={<Login setUsuarioActual={setUsuarioActual} />} />
              <Route path="/register" element={<Register setUsuarioActual={setUsuarioActual} />} />

              {/* Rutas privadas */}
              {usuarioActual ? (
                <>
                  <Route path="/home" element={<Home usuarioActual={usuarioActual} setUsuarioActual={setUsuarioActual} />} />
                  <Route path="/catalogo" element={<CatalogoLibros
                    catalogo={catalogo}
                    devoluciones={devoluciones}
                    setDevoluciones={setDevoluciones}
                    colas={colas}
                    setColas={setColas}
                    librosPrestados={librosPrestados}
                    usuarioActual={usuarioActual}
                  />} />
                  <Route path="/historial" element={<HistorialDevoluciones
                    setCatalogo={setCatalogo}
                    devoluciones={devoluciones}
                    setDevoluciones={setDevoluciones}
                  />} />
                  <Route path="/colas" element={<ColaEspera colas={colas} />} />
                  <Route path="/agregar-libro" element={<AgregarLibro />} />

                  {/* Ruta base */}
                  <Route path="/" element={<Navigate to="/home" replace />} />
                </>
              ) : (
                <Route path="*" element={<Navigate to="/login" replace />} />
              )}
            </Routes>
          </div>

          <div className="columna-lateral"></div>
        </div>
      </div>
    </Router>
  );
}

export default App;
