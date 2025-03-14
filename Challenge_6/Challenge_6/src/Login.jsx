import { useContext, useState } from "react";
import { AuthContext } from "./AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
const [username, setUsername] = useState("");
const { login } = useContext(AuthContext);
const navigate = useNavigate();

const handleLogin = () => {
    if (username.trim()) {
    login(username);
    navigate("/dashboard");
    }
};

return (
    <div>
    <h2>Login</h2>
    <input
        type="text"
        placeholder="Enter username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
    />
    <button onClick={handleLogin}>Login</button>
    </div>
);
};

export default Login;
