import { Home } from './pages/Home/Home';
import { Route, Routes } from 'react-router-dom';
import { FormLayout } from './layouts/FormLayout/FormLayout';
import { ViewType } from './types/ViewType';

export const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<FormLayout view={ViewType.LOGIN} />} />
            <Route path="/register" element={<FormLayout view={ViewType.REGISTER} />} />
        </Routes>
    );
};
