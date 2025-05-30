import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    stats: "not-authenticated", // o "authenticated"
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state) => {
            state.stats = "authenticated";
        },
        logout: (state) => {
            state.stats = "not-authenticated";
        },
    },
});

// ✅ Asegúrate de exportar así:
export const { login, logout } = authSlice.actions;
export default authSlice.reducer;

