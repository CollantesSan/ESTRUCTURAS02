const mockTree = {
    id: '1',
    name: 'Alice',
    title: 'CEO',
    children: [
        {
            id: '2',
            name: 'Bob',
            title: 'CTO',
            children: [
                { id: '4', name: 'David', title: 'Dev Lead', children: [] },
                { id: '5', name: 'Eva', title: 'QA Lead', children: [] },
            ],
        },
        {
            id: '3',
            name: 'Carol',
            title: 'CFO',
            children: [],
        },
    ],
};

export default mockTree;
