import Home from './pages/Home/Home';
import { Route, Routes } from 'react-router-dom';
import FormLayout from './layouts/FormLayout/FormLayout';
import { ViewType } from './types/ViewType';
import { getToken, isTokenExpired } from './utils/utils';

export default function App() {
    const token = getToken();

    return (
        <Routes>
            <Route path="/" element={!token || isTokenExpired(token) ? <FormLayout view={ViewType.LOGIN} /> : <Home />} />
            <Route path="/register" element={<FormLayout view={ViewType.REGISTER} />} />
        </Routes>
    );
}
