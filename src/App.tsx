import { useState } from 'react';
import { Home } from './pages/Home/Home';
import { Login } from './pages/Login/Login';
import { Route, Routes } from 'react-router-dom';
import Register from './pages/Register/Register';

export const App = () => {
    const [auth, setAuth] = useState(false);

    const handleAuthChange = () => {
        setAuth(!auth);
    };

    return (
        <Routes>
            <Route path="/" element={auth ? <Home /> : <Login login={handleAuthChange} />} />
            <Route path="/login" element={<Login login={handleAuthChange} />} />
            <Route path="/register" element={auth ? <Home /> : <Register />} />
        </Routes>
    );
};
