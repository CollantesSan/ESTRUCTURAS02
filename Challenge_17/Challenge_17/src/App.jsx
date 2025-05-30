import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import Registro from './Registro';
import Login from './Login';
import { useSelector } from 'react-redux';
import Home from './Home';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const { stats } = useSelector((state) => state.auth);

  return (
    <>
      <Routes>
        <Route path="/" element={<Registro />} />
        <Route path="/Login" element={<Login />} />
        <Route
          path="/Home"
          element={stats === "authenticated" ? <Home /> : <Navigate to="/Login" />}
        />
      </Routes>
      <ToastContainer position="top-right" autoClose={5000} closeOnClick />
    </>
  );
}

export default App;
