import { configureStore } from '@reduxjs/toolkit';
// import localeReducer from './slices/localeSlice';

const store = configureStore({
    reducer: {
        // locale: localeReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
