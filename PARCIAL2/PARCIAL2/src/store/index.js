// src/store/index.js
import { configureStore } from '@reduxjs/toolkit';
import clientReducer from './clientsSlice';

export default configureStore({
reducer: {
    clients: clientReducer,
},
});

