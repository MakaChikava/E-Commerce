import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './cartSlice';
import authSlice from './authSlice'

const store = configureStore({
    reducer: {
        cart: cartSlice,
        authentication: authSlice
    },
});

export default store;
