import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import { thunk } from 'redux-thunk'; /* {} importante pour vite car export default */

const store = configureStore({
    reducer: {
        auth: authReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store;