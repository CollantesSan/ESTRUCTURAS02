import { Link } from "react-router-dom";
import { useAuth } from "./AuthContext";

const Home = () => {
const { user, logout } = useAuth();

return (
    <div>
    <h1>Home (Pública)</h1>
    {user ? (
        <>
        <p>Bienvenido, {user.name}!</p>
        <button onClick={logout}>Logout</button>
        <br />
        <Link to="/dashboard">Ir al Dashboard</Link>
        </>
    ) : (
        <Link to="/login">Iniciar Sesión</Link>
    )}
    </div>
);
};

export default Home;

