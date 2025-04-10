// src/store/clientSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const initialState = [
  {
    id: uuidv4(),
    nombre: 'Juan Pérez',
    consultas: ['Consulta sobre pago'],
    reclamos: ['Reclamo de servicio'],
  },
  {
    id: uuidv4(),
    nombre: 'María Gómez',
    consultas: [],
    reclamos: [],
  },
];

const clientSlice = createSlice({
  name: 'clients',
  initialState,
  reducers: {
    addClient: (state, action) => {
      state.push({
        id: uuidv4(),
        nombre: action.payload,
        consultas: [],
        reclamos: [],
      });
    },
    addConsulta: (state, action) => {
      const client = state.find((c) => c.id === action.payload.id);
      if (client) {
        client.consultas.push(action.payload.texto);
      }
    },
    addReclamo: (state, action) => {
      const client = state.find((c) => c.id === action.payload.id);
      if (client) {
        client.reclamos.push(action.payload.texto);
      }
    },
  },
});

export const { addClient, addConsulta, addReclamo } = clientSlice.actions;
export default clientSlice.reducer;






