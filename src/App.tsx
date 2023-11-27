import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Error from './pages/Error/Error';
import Home from './pages/Home/Home';
import FormLayout from './layouts/FormLayout/FormLayout';
import { ViewType } from './types/ViewType';
import { isUserLoggedIn } from './utils/utils';

export default function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<Error />} />
                <Route path="/" element={isUserLoggedIn() ? <Home /> : <FormLayout view={ViewType.LOGIN} />} />
                <Route path="/register" element={<FormLayout view={ViewType.REGISTER} />} />
            </Routes>
        </BrowserRouter>
    );
}
