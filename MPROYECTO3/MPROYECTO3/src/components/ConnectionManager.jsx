import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import {
    addNode,
    addLink,
    removeLink,
    clearLinks
} from '../store/slices/graphSlice';

export default function ConnectionManager() {
    const dispatch = useDispatch();
    const tree = useSelector(state => state.tree.root);
    const links = useSelector(state => state.graph.links);
    const [source, setSource] = useState('');
    const [target, setTarget] = useState('');

    const flatten = (node, list = []) => {
        list.push({ id: node.id, name: node.name });
        node.children.forEach(child => flatten(child, list));
        return list;
    };

    const allNodes = flatten(tree);

    const handleConnect = (e) => {
        e.preventDefault();
        if (source === target || !source || !target) return;

        const sourceNode = allNodes.find(n => n.id === source);
        const targetNode = allNodes.find(n => n.id === target);

        dispatch(addNode({ id: sourceNode.id, name: sourceNode.name }));
        dispatch(addNode({ id: targetNode.id, name: targetNode.name }));
        dispatch(addLink({ source, target }));

        setSource('');
        setTarget('');
    };

    const handleDelete = (src, tgt) => {
        dispatch(removeLink({ source: src, target: tgt }));
    };

    return (
        <div>
            <form onSubmit={handleConnect} style={{ marginBottom: "2rem" }}>
                <h3>Conectar empleados</h3>
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                    <div style={{ flex: 1 }}>
                        <label>Emisor</label>
                        <select value={source} onChange={(e) => setSource(e.target.value)}>
                            <option value="">-- Selecciona emisor --</option>
                            {allNodes.map(n => (
                                <option key={n.id} value={n.id}>{n.name}</option>
                            ))}
                        </select>
                    </div>

                    <div style={{ flex: 1 }}>
                        <label>Receptor</label>
                        <select value={target} onChange={(e) => setTarget(e.target.value)}>
                            <option value="">-- Selecciona receptor --</option>
                            {allNodes.map(n => (
                                <option key={n.id} value={n.id}>{n.name}</option>
                            ))}
                        </select>
                    </div>

                    <div style={{ alignSelf: 'end' }}>
                        <button type="submit">➕ Conectar</button>
                    </div>
                </div>
            </form>

            <div>
                <h3>Conexiones actuales</h3>
                {links.length > 0 ? (
                    <>
                        <button
                            onClick={() => dispatch(clearLinks())}
                            className="delete"
                            style={{ marginBottom: '1rem' }}
                        >
                            🗑️ Eliminar todas las conexiones
                        </button>
                        <ul>
                            {links.map((link, idx) => {
                                const from = allNodes.find(n => n.id === link.source);
                                const to = allNodes.find(n => n.id === link.target);
                                return (
                                    <li key={idx}>
                                        {from?.name} ➡️ {to?.name}
                                        <button
                                            className="delete"
                                            onClick={() => handleDelete(link.source, link.target)}
                                        >
                                            Eliminar
                                        </button>
                                    </li>
                                );
                            })}
                        </ul>
                    </>
                ) : (
                    <p>No hay conexiones actualmente.</p>
                )}
            </div>
        </div>
    );
}


