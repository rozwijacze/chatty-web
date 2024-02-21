import { render, RenderOptions } from '@testing-library/react';
import ReduxStoreProvider from '@components/other/ReduxStoreProvider/ReduxStoreProvider';
import { AppStore, RootState, setupStore } from '@redux/store';

// This type interface extends the default options for render from RTL, as well
// as allows the user to specify other things such as initialState, store.
interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
    preloadedState?: Partial<RootState>;
    store?: AppStore;
}

export function renderWithProviders(
    ui: JSX.Element,
    {
        preloadedState = {},
        // Automatically create a store instance if no store was passed in
        store = setupStore(preloadedState),
        ...renderOptions
    }: ExtendedRenderOptions = {}
) {
    // Return an object with the store and all of RTL's query functions
    return { store, ...render(ui, { wrapper: ReduxStoreProvider, ...renderOptions }) };
}
