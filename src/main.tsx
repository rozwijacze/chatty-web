import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/main.scss';
import LocaleContextProvider from './contexts/LocaleContext';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <LocaleContextProvider>
            <App />
        </LocaleContextProvider>
    </React.StrictMode>
);
