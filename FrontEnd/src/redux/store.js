import { configureStore } from '@reduxjs/toolkit';
import authReducer from './Auth/authSlice';
import profileReducer from './Profile/profileSlice';
import { thunk } from 'redux-thunk';

const store = configureStore({
    reducer: {
        auth: authReducer,
        profile: profileReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store;
