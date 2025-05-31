import { useSelector } from 'react-redux';
import Tree from 'react-d3-tree';
import { useState, useRef, useEffect } from 'react';
import { saveTreeToStorage } from '../hooks/useLocalTree';
import EmployeeForm from './EmployeeForm';
import SubordinatesCounter from './SubordinatesCounter';
import EmployeeEditor from './EmployeeEditor';

const containerStyles = {
    width: '100%',
    height: '600px',
    backgroundColor: '#f3f3f3',
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '1rem'
};

export default function TreeView() {
    const treeData = useSelector((state) => state.tree.root);
    const [translate, setTranslate] = useState({ x: 0, y: 0 });
    const [selectedNode, setSelectedNode] = useState(null);
    const containerRef = useRef(null);

    useEffect(() => {
        const dimensions = containerRef.current.getBoundingClientRect();
        setTranslate({ x: dimensions.width / 2, y: 50 });
    }, []);

    useEffect(() => {
        saveTreeToStorage(treeData);
    }, [treeData]);

    const findNode = (node, id) => {
        if (node.id === id) return node;
        for (let child of node.children) {
            const result = findNode(child, id);
            if (result) return result;
        }
        return null;
    };

    const handleClick = (nodeData) => {
        const id = nodeData.data.id;
        const found = findNode(treeData, id);
        if (found) setSelectedNode(found);
    };

    const isRoot = (nodeId) => nodeId === treeData.id;

    return (
        <div ref={containerRef}>
            <div style={containerStyles}>
                <Tree
                    data={treeData}
                    translate={translate}
                    orientation="vertical"
                    onNodeClick={handleClick}
                    collapsible={false}
                />
            </div>

            {selectedNode && (
                <div style={{ marginTop: "2rem" }}>
                    <h3>
                        {isRoot(selectedNode.id)
                            ? `Editar empleado principal: ${selectedNode.name}`
                            : `Editar subalterno: ${selectedNode.name}`}
                    </h3>

                    <EmployeeEditor employee={selectedNode} />

                    <div style={{ marginTop: "2rem" }}>
                        <h4>Agregar subalterno a: <strong>{selectedNode.name}</strong></h4>
                        <EmployeeForm parentId={selectedNode.id} />
                        <SubordinatesCounter employeeId={selectedNode.id} />
                    </div>
                </div>
            )}
        </div>
    );
}



