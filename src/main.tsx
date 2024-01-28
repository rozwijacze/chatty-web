import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import '@styles/main.scss';
import GlobalContextProviders from '@components/other/GlobalContextProviders/GlobalContextProviders';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <GlobalContextProviders>
            <App />
        </GlobalContextProviders>
    </React.StrictMode>
);
