import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import FirstApp from './FirstApp'; // Importamos FirstApp
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
        <FirstApp title ="MY FIRST APP" /> {/* Agregamos FirstApp al renderizado */}
    </React.StrictMode>
);
