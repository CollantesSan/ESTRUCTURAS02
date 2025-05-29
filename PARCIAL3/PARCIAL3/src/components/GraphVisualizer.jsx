import { useEffect, useState } from "react";
import { Graph } from "react-d3-graph";
import { db } from "../firebase/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { ZoneNode } from "../data/ZoneNode";

const cityColors = ["#4da6ff", "#ffb84d", "#c266ff", "#66ccff", "#ff6666", "#339966"];
const zoneShades = ["#a8e6cf", "#dcedc1", "#ffd3b6", "#ffaaa5", "#c3f584", "#f9f871"];

export default function GraphVisualizer() {
    const [graphData, setGraphData] = useState({ nodes: [], links: [] });
    const [graphWidth, setGraphWidth] = useState(window.innerWidth - 100);
    const navigate = useNavigate();

    useEffect(() => {
        const handleVisibilityChange = () => {
            if (document.visibilityState === "visible") {
                fetchCities();
            }
        };
        document.addEventListener("visibilitychange", handleVisibilityChange);
        return () => document.removeEventListener("visibilitychange", handleVisibilityChange);
    }, []);

    useEffect(() => {
        const handleResize = () => setGraphWidth(window.innerWidth - 100);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const fetchCities = async () => {
        const snapshot = await getDocs(collection(db, "cities"));
        const cities = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
        }));

        const nodes = [];
        const links = [];
        const seenLinks = new Set();
        const validCityIds = new Set(cities.map(c => `city-${c.id}`));

        cities.forEach((city, index) => {
            const cityNodeId = `city-${city.id}`;
            const cityColor = cityColors[index % cityColors.length];
            const zoneColorBase = zoneShades[index % zoneShades.length];

            const verticalStep = 40;
            const baseY = 60;
            const connectionDepth = (city.connections?.length || 0);

            nodes.push({
                id: cityNodeId,
                label: city.name,
                color: cityColor,
                fx: 600 + index * 250,
                fy: baseY + connectionDepth * verticalStep,
            });

            for (const connectionId of city.connections || []) {
                const targetNodeId = `city-${connectionId}`;
                const linkKey = [cityNodeId, targetNodeId].sort().join("->");

                const targetCity = cities.find(c => `city-${c.id}` === targetNodeId);
                const isMutualConnection = targetCity?.connections?.includes(city.id);

                if (
                    validCityIds.has(targetNodeId) &&
                    !seenLinks.has(linkKey) &&
                    isMutualConnection
                ) {
                    links.push({ source: cityNodeId, target: targetNodeId });
                    seenLinks.add(linkKey);
                }
            }

            if (city.greenZoneRoot) {
                const root = ZoneNode.fromJSON(city.greenZoneRoot);

                const addZoneNodes = (node, parentId = cityNodeId, depth = 1, offset = 0) => {
                    const zoneNodeId = `city-${city.id}_zone-${node.id}`;
                    nodes.push({
                        id: zoneNodeId,
                        label: `🌿 ${node.name}`,
                        color: zoneColorBase,
                        fx: 600 + index * 250 + offset * 100,
                        fy: 150 + depth * 100,
                    });
                    links.push({ source: parentId, target: zoneNodeId });

                    node.children.forEach((child, i) =>
                        addZoneNodes(child, zoneNodeId, depth + 1, i - Math.floor(node.children.length / 2))
                    );
                };

                addZoneNodes(root);
            }
        });

        setGraphData({ nodes, links });
    };

    useEffect(() => {
        fetchCities();
    }, []);

    const config = {
        nodeHighlightBehavior: true,
        node: {
            size: 400,
            fontSize: 12,
            highlightStrokeColor: "black",
            labelProperty: "label",
        },
        link: {
            highlightColor: "gray",
        },
        height: 800,
        width: graphWidth,
        directed: true,
        collapsible: false,
        panAndZoom: true,
        staticGraph: true,
    };

    const handleClickNode = (nodeId) => {
        if (nodeId.startsWith("city-") && !nodeId.includes("_zone-")) {
            const cityId = nodeId.replace("city-", "");
            navigate(`/city/${cityId}`);
        }
    };

    return (
        <div style={{ textAlign: "center", marginTop: "2rem" }}>
            <h2>Red de Ciudades y sus Zonas Verdes</h2>

            <button
                onClick={fetchCities}
                style={{
                    backgroundColor: "#4caf50",
                    color: "white",
                    border: "none",
                    padding: "0.5rem 1.2rem",
                    borderRadius: "4px",
                    marginBottom: "1.5rem",
                    cursor: "pointer",
                    fontSize: "0.95rem",
                }}
            >
                🔄 Refrescar grafo
            </button>

            <div className="graph-container">
                <Graph
                    id="cities-graph"
                    data={graphData}
                    config={config}
                    onClickNode={handleClickNode}
                />
            </div>
        </div>
    );
}







