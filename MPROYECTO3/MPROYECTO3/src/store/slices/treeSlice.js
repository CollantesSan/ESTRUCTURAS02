import { createSlice } from '@reduxjs/toolkit';
import mockTree from '../../data/mockData';
import { loadTreeFromStorage } from '../../hooks/useLocalTree';

const initialState = {
    root: loadTreeFromStorage() || mockTree,
};

const treeSlice = createSlice({
    name: 'tree',
    initialState,
    reducers: {
        setTree(state, action) {
            state.root = action.payload;
        },
        addChild(state, action) {
            const { parentId, newNode } = action.payload;
            const addRecursive = (node) => {
                if (node.id === parentId) {
                    node.children.push(newNode);
                } else {
                    node.children.forEach(addRecursive);
                }
            };
            addRecursive(state.root);
        },
        editNode(state, action) {
            const { nodeId, name, title } = action.payload;
            const updateRecursive = (node) => {
                if (node.id === nodeId) {
                    node.name = name;
                    node.title = title;
                } else {
                    node.children.forEach(updateRecursive);
                }
            };
            updateRecursive(state.root);
        },
    },
});

export const { setTree, addChild, editNode } = treeSlice.actions;
export default treeSlice.reducer;

