import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import '@styles/main.scss';
import GlobalContextProviders from '@components/other/GlobalContextProviders/GlobalContextProviders';
// import ReduxStoreProvider from '@components/other/ReduxStoreProvider/ReduxStoreProvider';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        {/* <ReduxStoreProvider> */}
        <GlobalContextProviders>
            <App />
        </GlobalContextProviders>
        {/* </ReduxStoreProvider> */}
    </React.StrictMode>
);
