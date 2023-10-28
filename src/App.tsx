import { Home } from './pages/Home/Home';
import { Route, Routes } from 'react-router-dom';
import { AccountsLayout } from './layouts/AccountsLayout/AccountsLayout';
import { ViewType } from './types/ViewType';

export const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<AccountsLayout form={ViewType.LOGIN} />} />
            <Route path="/register" element={<AccountsLayout form={ViewType.REGISTER} />} />
        </Routes>
    );
};
