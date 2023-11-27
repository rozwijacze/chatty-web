import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Error from './pages/Error/Error';
import Home from './pages/Home/Home';
import FormLayout from './layouts/FormLayout/FormLayout';
import { ViewType } from './types/ViewType';
import { getToken, isTokenExpired } from './utils/utils';

export default function App() {
    const token = getToken();

    return (
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<Error />} />
                <Route path="/" element={!token || isTokenExpired(token) ? <FormLayout view={ViewType.LOGIN} /> : <Home />} />
                <Route path="/register" element={<FormLayout view={ViewType.REGISTER} />} />
            </Routes>
        </BrowserRouter>
    );
}
