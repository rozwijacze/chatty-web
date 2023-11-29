import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Error from './pages/Error/Error';
import Home from './pages/Home/Home';
import FormLayout from './layouts/FormLayout/FormLayout';
import { ViewType } from './types/ViewType';
import { useAuth } from './contexts/AuthContext';

export default function App() {
    const { isAuthenticated } = useAuth();

    return (
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<Error />} />
                <Route path="/" element={isAuthenticated ? <Home /> : <FormLayout view={ViewType.LOGIN} />} />
                <Route path="/register" element={<FormLayout view={ViewType.REGISTER} />} />
            </Routes>
        </BrowserRouter>
    );
}
