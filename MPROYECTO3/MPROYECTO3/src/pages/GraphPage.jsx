import GraphView from "../components/GraphView";
import ConnectionManager from "../components/ConnectionManager";

export default function GraphPage() {
    return (
        <div style={{ padding: "2rem" }}>
            <h1>Red de comunicación</h1>
            <ConnectionManager />
            <GraphView />
        </div>
    );
}
