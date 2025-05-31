import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    nodes: [],
    links: [],
};

const graphSlice = createSlice({
    name: 'graph',
    initialState,
    reducers: {
        setGraph(state, action) {
            return action.payload;
        },
        addNode(state, action) {
            const exists = state.nodes.some(n => n.id === action.payload.id);
            if (!exists) {
                state.nodes.push(action.payload);
            }
        },
        addLink(state, action) {
            const exists = state.links.some(
                l => l.source === action.payload.source && l.target === action.payload.target
            );
            if (!exists) {
                state.links.push(action.payload);
            }
        },
        removeLink(state, action) {
            const { source, target } = action.payload;
            state.links = state.links.filter(
                link => !(link.source === source && link.target === target)
            );
        },
        clearLinks(state) {
            state.links = [];
        },
    },
});

export const { setGraph, addNode, addLink, removeLink, clearLinks } = graphSlice.actions;
export default graphSlice.reducer;


