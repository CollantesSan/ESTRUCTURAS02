// src/App.jsx
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CityDetail from "./pages/CityDetail";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/city/:id" element={<CityDetail />} />
    </Routes>
  );
}



