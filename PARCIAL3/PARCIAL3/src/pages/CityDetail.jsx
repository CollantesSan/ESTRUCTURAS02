import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../firebase/firebaseConfig";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { ZoneNode } from "../data/ZoneNode";
import ZoneTree from "../components/ZoneTree";
import ZoneForm from "../components/ZoneForm";

export default function CityDetail() {
    const { id } = useParams();
    const [city, setCity] = useState(null);
    const [loading, setLoading] = useState(true);
    const [selectedZone, setSelectedZone] = useState(null);

    const [formOpen, setFormOpen] = useState(false);
    const [formMode, setFormMode] = useState("add");
    const [formTargetId, setFormTargetId] = useState(null);
    const [formDefaultName, setFormDefaultName] = useState("");

    const fetchCity = async () => {
        const ref = doc(db, "cities", id);
        const snapshot = await getDoc(ref);
        if (snapshot.exists()) {
            const data = snapshot.data();
            const greenZoneRoot = ZoneNode.fromJSON(data.greenZoneRoot);
            setCity({ ...data, id: snapshot.id, greenZoneRoot });
        } else {
            setCity(null);
        }
        setLoading(false);
    };

    useEffect(() => {
        fetchCity();
    }, [id]);

    const handleSelect = (zoneId) => {
        setSelectedZone(zoneId);
    };

    const handleEditZone = (zoneId) => {
        const zone = city.greenZoneRoot.findById(zoneId);
        if (zone) {
            setFormMode("edit");
            setFormTargetId(zoneId);
            setFormDefaultName(zone.name);
            setFormOpen(true);
        }
    };

    const handleAddSubzone = (zoneId) => {
        setFormMode("add");
        setFormTargetId(zoneId);
        setFormDefaultName("");
        setFormOpen(true);
    };

    const handleZoneFormSubmit = (newName) => {
        if (formMode === "edit") {
            const target = city.greenZoneRoot.findById(formTargetId);
            if (target) {
                target.editName(newName);
            }
        } else if (formMode === "add") {
            const parent = city.greenZoneRoot.findById(formTargetId);
            if (parent) {
                parent.addChild(new ZoneNode(newName));
            }
        }
        saveUpdatedTree();
        setFormOpen(false);
    };

    const saveUpdatedTree = async () => {
        const ref = doc(db, "cities", city.id);
        await updateDoc(ref, {
            greenZoneRoot: city.greenZoneRoot.toJSON(),
        });
        setCity({ ...city });
    };

    if (loading) return <p>Cargando ciudad...</p>;
    if (!city) return <p>Ciudad no encontrada.</p>;

    return (
        <div className="container">
            <h1>{city.name}</h1>
            <h2 className="section-title">Zonas verdes</h2>

            <div className="zona-panel">
                <p><strong>Altura máxima:</strong> {city.greenZoneRoot.getHeight()}</p>
                <p><strong>Total de zonas verdes:</strong> {city.greenZoneRoot.getTotalZones()}</p>
            </div>

            <ZoneTree
                node={city.greenZoneRoot}
                onEdit={handleEditZone}
                onAddChild={handleAddSubzone}
                onSelect={handleSelect}
                selectedId={selectedZone}
            />

            <ZoneForm
                isOpen={formOpen}
                onClose={() => setFormOpen(false)}
                onSubmit={handleZoneFormSubmit}
                defaultName={formDefaultName}
                mode={formMode}
            />
        </div>
    );
}






