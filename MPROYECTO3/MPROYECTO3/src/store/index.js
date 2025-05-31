import { configureStore } from '@reduxjs/toolkit';
import treeReducer from './slices/treeSlice';
import graphReducer from './slices/graphSlice';

const store = configureStore({
    reducer: {
        tree: treeReducer,
        graph: graphReducer,
    },
});

export default store;
