// src/components/MetricsPanel.jsx
export default function MetricsPanel({ rootNode }) {
    if (!rootNode) return null;

    return (
        <div style={{ backgroundColor: "#eef", padding: "1rem", marginTop: "1rem" }}>
            <h4>Métricas de Zonas Verdes</h4>
            <p>Altura del árbol: {rootNode.getHeight()}</p>
            <p>Total de zonas: {rootNode.getTotalZones()}</p>
        </div>
    );
}
