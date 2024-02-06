import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { lazy, Suspense, useEffect } from 'react';
import ViewType from '@customTypes/ViewType';
import { useAuthContext } from '@contexts/AuthContext';
import LoadingLayout from '@layouts/LoadingLayout/LoadingLayout';
import { setThemeOnBody } from '@helpers/ThemeHelper';

const Error = lazy(() => import('@pages/Error/Error'));
const Home = lazy(() => import('@pages/Home/Home'));
const FormLayout = lazy(() => import('@layouts/FormLayout/FormLayout'));

export default function App() {
    useEffect(() => setThemeOnBody(), []);
    const { isAuthenticated } = useAuthContext();

    const ROUTES = [
        {
            path: '*',
            element: <Error />
        },
        {
            path: '/',
            element: isAuthenticated ? <Home /> : <FormLayout view={ViewType.LOGIN} />
        },
        {
            path: '/register',
            element: <FormLayout view={ViewType.REGISTER} />
        }
    ];

    return (
        <BrowserRouter>
            <Suspense fallback={<LoadingLayout />}>
                <Routes>
                    {ROUTES.map((route, key) => (
                        <Route key={key} path={route.path} element={route.element} />
                    ))}
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
}
