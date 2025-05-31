import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import TreePage from "./pages/TreePage";
import GraphPage from "./pages/GraphPage";
import './styles/global.scss';

export default function App() {
    return (
        <Router>
            <nav>
                <Link to="/">Organigrama</Link>
                <Link to="/graph">Red de comunicación</Link>
            </nav>
            <div className="container">
                <Routes>
                    <Route path="/" element={<TreePage />} />
                    <Route path="/graph" element={<GraphPage />} />
                </Routes>
            </div>
        </Router>
    );
}
