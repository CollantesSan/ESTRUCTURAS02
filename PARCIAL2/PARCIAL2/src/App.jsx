import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ClientePage from './pages/ClientePage';
import ConsultaPage from './pages/ConsultaPage';
import ReclamoPage from './pages/ReclamoPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/clientes/:id" element={<ClientePage />} />
      <Route path="/clientes/:id/consulta/:index" element={<ConsultaPage />} />
      <Route path="/clientes/:id/reclamo/:index" element={<ReclamoPage />} />
      <Route path="/clientes/:id/consulta" element={<ConsultaPage />} />
      <Route path="/clientes/:id/reclamo" element={<ReclamoPage />} />
    </Routes>
  );
}

export default App;



