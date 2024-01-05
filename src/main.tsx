import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import '@styles/main.scss';
import LocaleContextProvider from '@contexts/LocaleContext';
import AuthContextProvider from '@contexts/AuthContext';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <LocaleContextProvider>
            <AuthContextProvider>
                <App />
            </AuthContextProvider>
        </LocaleContextProvider>
    </React.StrictMode>
);
