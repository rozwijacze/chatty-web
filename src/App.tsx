import { Home } from './pages/Home/Home';
import { Route, Routes } from 'react-router-dom';
import { AccountsLayout } from './layouts/AccountsLayout/AccountsLayout';

export const App = () => {

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<AccountsLayout form="Login"/>} />
            <Route path="/register" element={<AccountsLayout form="Register" />} />
        </Routes>
    );
};
