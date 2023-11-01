import { Home } from './pages/Home/Home';
import { Route, Routes } from 'react-router-dom';
import { AccountsLayout } from './layouts/AccountsLayout/AccountsLayout';
import { Register } from './pages/Register/Register';
import { Login } from './pages/Login/Login';

export const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<AccountsLayout form={<Login />} />} />
            <Route path="/register" element={<AccountsLayout form={<Register />} />} />
        </Routes>
    );
};
