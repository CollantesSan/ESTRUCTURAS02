import { useSelector } from 'react-redux';
import { Graph } from 'react-d3-graph';

export default function GraphView() {
    const { nodes, links } = useSelector((state) => state.graph);

    const data = {
        nodes: nodes.map(n => ({ id: n.id, label: n.name })),
        links: links.map(l => ({ source: l.source, target: l.target })),
    };

    const config = {
        nodeHighlightBehavior: true,
        node: {
            color: 'lightblue',
            size: 300,
            highlightStrokeColor: 'blue',
            labelProperty: 'label',
        },
        link: {
            highlightColor: 'lightblue',
        },
        directed: true,
    };

    return (
        <div style={{ width: '100%', height: '600px' }}>
            <Graph
                id="employee-graph"
                data={data}
                config={config}
            />
        </div>
    );
}
