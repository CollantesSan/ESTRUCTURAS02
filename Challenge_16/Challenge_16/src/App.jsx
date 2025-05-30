import React, { useEffect, useState } from 'react';
import { Graph } from 'react-d3-graph';
import Grafo from './Grafo';

const App = () => {
    const [data, setData] = useState({ nodes: [], links: [] });
    const [grafo, setGrafo] = useState(null);
    const [ciudades, setCiudades] = useState([]);
    const [ciudadSeleccionada, setCiudadSeleccionada] = useState('');
    const [habitantes, setHabitantes] = useState([]);
    const [resumen, setResumen] = useState([]);

    useEffect(() => {
        const nuevoGrafo = new Grafo();

        // Agregar ciudades
        const ciudadesData = [
            { id: 'c1', label: 'CALI' },
            { id: 'c2', label: 'TULUA' },
            { id: 'c3', label: 'BUGA' },
            { id: 'c4', label: 'MEDELLIN' },
            { id: 'c5', label: 'BOGOTA' },
            { id: 'c6', label: 'CUCUTA' },
        ];

        ciudadesData.forEach(city =>
            nuevoGrafo.addNode({ id: city.id, label: `🏙️ ${city.label}`, type: 'city' })
        );

        // Agregar personas
        const personas = [
            { id: 'p1', label: 'Lucía (22)', city: 'c3' },
            { id: 'p2', label: 'Mateo (18)', city: 'c1' },
            { id: 'p3', label: 'Valentina (21)', city: 'c5' },
            { id: 'p4', label: 'axl (20)', city: 'c2' },
            { id: 'p5', label: 'Isabella (19)', city: 'c6' },
            { id: 'p6', label: 'Tomás (23)', city: 'c4' },
            { id: 'p7', label: 'Mariana (20)', city: 'c3' },
            { id: 'p8', label: 'Emilio (24)', city: 'c1' },
        ];


        personas.forEach(p => {
            nuevoGrafo.addNode({ id: p.id, label: `🧍 ${p.label}`, type: 'person' });
            nuevoGrafo.addEdge({ id: p.id }, { id: p.city });
        });

        setGrafo(nuevoGrafo);
        setData(nuevoGrafo.getGraphData());
        setCiudades(ciudadesData);

        // Calcular resumen
        const resumenCiudades = ciudadesData.map(c => ({
            ciudad: c.label,
            cantidad: nuevoGrafo.getPeopleInCity(c.id).length,
        }));
        setResumen(resumenCiudades);
    }, []);

    const handleSeleccionCiudad = (e) => {
        const ciudadId = e.target.value;
        setCiudadSeleccionada(ciudadId);

        if (grafo) {
            const personas = grafo.getPeopleInCity(ciudadId);
            setHabitantes(personas);
        }
    };

    const config = {
        nodeHighlightBehavior: true,
        height: 800, // Aumentamos altura del área de grafo
        width: 1200, // Aumentamos ancho del área de grafo
        node: {
            size: 600,
            highlightStrokeColor: '#000',
            fontSize: 16,
            renderLabel: true,
            labelProperty: 'label',
            fontColor: '#000000', // Texto negro para contraste
            color: node => {
                if (node.type === 'city') return '#a3d8f4';      // celeste claro
                if (node.type === 'person') return '#b6e2a1';    // verde claro
                return '#ccc';
            },
        },
        link: {
            highlightColor: '#555',
            renderLabel: false,
            strokeWidth: 1.5,
        },
        directed: false,
        automaticRearrangeAfterDropNode: true,
        collapsible: false,
        focusAnimationDuration: 0.75,
        panAndZoom: true,
        staticGraph: false,
        d3: {
            gravity: -250, // aleja los nodos
            linkLength: 150,
        }
    };


    return (
        <div className="container">
            <h1>City Graph Viewer</h1>

            <div className="selector">
                <label htmlFor="ciudad-select">Selecciona una ciudad:</label>
                <select id="ciudad-select" value={ciudadSeleccionada} onChange={handleSeleccionCiudad}>
                    <option value="">-- Elegir ciudad --</option>
                    {ciudades.map((c) => (
                        <option key={c.id} value={c.id}>{c.label}</option>
                    ))}
                </select>
            </div>

            {ciudadSeleccionada && (
                <div className="habitantes">
                    <h3>Personas en {ciudades.find(c => c.id === ciudadSeleccionada)?.label}:</h3>
                    {habitantes.length > 0 ? (
                        <ul>
                            {habitantes.map((p, index) => (
                                <li key={index}>{p.label.replace('🧍 ', '')}</li>
                            ))}
                        </ul>
                    ) : (
                        <p>No hay personas registradas en esta ciudad.</p>
                    )}
                </div>
            )}

            <div className="graph-box" style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
                <Graph id="graph-id" data={data} config={config} />
            </div>

            <div className="habitantes" style={{ marginTop: "2rem" }}>
                <h3>Resumen de personas por ciudad</h3>
                <ul>
                    {resumen.map((r, i) => (
                        <li key={i}><strong>{r.ciudad}</strong>: {r.cantidad} persona(s)</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default App;



