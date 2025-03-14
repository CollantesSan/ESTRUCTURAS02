import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./AuthContext"; // Ahora está en la misma carpeta

const PrivateRoute = ({ children }) => {
const { user } = useContext(AuthContext);
return user ? children : <Navigate to="/login" />;
};

export default PrivateRoute;