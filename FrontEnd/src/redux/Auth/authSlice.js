import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    token: null,
    isAuthenticated: false,
    isLoading: false,
    error: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginBegin: (state) => {
            state.isLoading = true;
            state.error = null;
        },
        loginSuccessfull: (state, action) => {
            state.isLoading = false;
            state.isAuthenticated = true;
            state.token = action.payload.token;
        },
        loginFailure: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        logout: (state) => {
            state.isAuthenticated = false;
            state.token = null;
        },
    },
});

export const { loginBegin, loginSuccessfull, loginFailure, logout } = authSlice.actions;

export default authSlice.reducer;