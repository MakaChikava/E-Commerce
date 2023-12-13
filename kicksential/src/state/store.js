import { configureStore } from 'reduxjs/toolkit';

export const store = configureStore({
    reducer: {},
});

export const RootState = ReturnType<typeof store.getState>;
export const AppDispatch = typeof store.dispatch;