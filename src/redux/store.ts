import { combineReducers, configureStore } from '@reduxjs/toolkit';
import localeReducer from './slices/localeSlice';

const rootReducer = combineReducers({
    locale: localeReducer
});

export function setupStore(preloadedState?: Partial<RootState>) {
    return configureStore({
        preloadedState,
        reducer: rootReducer
    });
}

const store = setupStore();

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof configureStore>;
export type AppDispatch = typeof store.dispatch;
export default store;
