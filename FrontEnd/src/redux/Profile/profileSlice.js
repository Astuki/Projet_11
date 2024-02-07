// profileSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    username: '',
    firstName: '',
    lastName: '',
    isLoading: false,
    error: null,
};

const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setProfile: (state, action) => {
            return {
                ...state,
                username: action.payload.username,
                firstName: action.payload.firstName,
                lastName: action.payload.lastName,
            };
        },
        updateUsernameStart: (state) => {
            state.isLoading = true;
            state.error = null;
        },
        updateUsernameSuccess: (state, action) => {
            state.isLoading = false;
            state.username = action.payload.username;
        },
        updateUsernameFailure: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
    },
});

export const { setProfile, updateUsernameStart, updateUsernameSuccess, updateUsernameFailure } = profileSlice.actions;

export default profileSlice.reducer;
