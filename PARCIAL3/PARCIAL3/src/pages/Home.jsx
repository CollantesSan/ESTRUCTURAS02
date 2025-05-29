import CityForm from "../components/CityForm";
import CityList from "../components/CityList";
import CityConnector from "../components/CityConnector";
import GraphVisualizer from "../components/GraphVisualizer";

export default function Home() {
    return (
        <>
            <div className="container">
                <h1 className="section-title">Gestión de Ciudades</h1>

                <div className="city-card">
                    <h2>Añadir ciudad</h2>
                    <CityForm />
                </div>

                <div className="city-card">
                    <h2>Ciudades registradas</h2>
                    <CityList />
                </div>

                <div className="city-card">
                    <h2>Conectar ciudades</h2>
                    <CityConnector />
                </div>
            </div>

            <hr style={{ margin: "3rem 0" }} />

            {/* El grafo ahora va fuera del contenedor para evitar límites de anchura */}
            <GraphVisualizer />
        </>
    );
}



