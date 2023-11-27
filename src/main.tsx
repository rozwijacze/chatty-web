import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/main.scss';
import LocaleContextProvider from './contexts/LocaleContext';
import { AuthProvider } from './contexts/AuthContext';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <AuthProvider>
            <LocaleContextProvider>
                <App />
            </LocaleContextProvider>
        </AuthProvider>
    </React.StrictMode>
);
