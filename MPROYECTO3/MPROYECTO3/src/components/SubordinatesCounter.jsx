import { useSelector } from 'react-redux';
import { countSubordinates } from '../hooks/useSubordinates';

export default function SubordinatesCounter({ employeeId }) {
    const root = useSelector((state) => state.tree.root);

    const findEmployee = (node, id) => {
        if (node.id === id) return node;
        for (let child of node.children) {
            const found = findEmployee(child, id);
            if (found) return found;
        }
        return null;
    };

    const employee = findEmployee(root, employeeId);
    const total = employee ? countSubordinates(employee) : 0;

    return <p>Total de subalternos: {total}</p>;
}
