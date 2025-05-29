// src/redux/citiesSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { ZoneNode } from '../data/ZoneNode';

const initialState = {
    cities: [], // cada ciudad: { id, name, connections, greenZoneRoot }
};

const citiesSlice = createSlice({
    name: 'cities',
    initialState,
    reducers: {
        addCity: (state, action) => {
            const newCity = {
                id: crypto.randomUUID(),
                name: action.payload.name,
                connections: [],
                greenZoneRoot: null,
            };
            state.cities.push(newCity);
        },

        removeCity: (state, action) => {
            state.cities = state.cities.filter(city => city.id !== action.payload.id);
            // También podrías eliminar las conexiones si lo deseas aquí
        },

        connectCities: (state, action) => {
            const { id1, id2 } = action.payload;
            const city1 = state.cities.find(city => city.id === id1);
            const city2 = state.cities.find(city => city.id === id2);
            if (city1 && city2 && !city1.connections.includes(id2)) {
                city1.connections.push(id2);
                city2.connections.push(id1); // bidireccional
            }
        },

        setGreenZoneRoot: (state, action) => {
            const { cityId, rootNode } = action.payload;
            const city = state.cities.find(c => c.id === cityId);
            if (city) {
                city.greenZoneRoot = rootNode;
            }
        },

        updateCityZones: (state, action) => {
            const { cityId, updatedRoot } = action.payload;
            const city = state.cities.find(c => c.id === cityId);
            if (city) {
                city.greenZoneRoot = updatedRoot;
            }
        }
    },
});

export const {
    addCity,
    removeCity,
    connectCities,
    setGreenZoneRoot,
    updateCityZones
} = citiesSlice.actions;

export default citiesSlice.reducer;
