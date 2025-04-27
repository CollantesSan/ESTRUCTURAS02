import { signOut } from 'firebase/auth';
import { auth } from '../firebase/firebase';
import { useNavigate, Link } from 'react-router-dom';

function Navbar({ usuarioActual, setUsuarioActual }) {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUsuarioActual(null);
      navigate('/login');
    } catch (error) {
      alert('Error al cerrar sesión.');
    }
  };

  return (
    <nav style={{ marginBottom: '20px' }}>
      {/* Navbar Buttons */}
      <Link to="/home">
        <button className="navbar-button">Inicio</button>
      </Link>

      <Link to="/catalogo">
        <button className="navbar-button">Catálogo</button>
      </Link>

      <Link to="/historial">
        <button className="navbar-button">Historial</button>
      </Link>

      <Link to="/colas">
        <button className="navbar-button">Colas</button>
      </Link>

      <button className="navbar-button" onClick={handleLogout}>
        Cerrar Sesión
      </button>
    </nav>
  );
}

export default Navbar;
