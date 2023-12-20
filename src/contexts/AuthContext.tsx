import { createContext, useLayoutEffect, useState } from 'react';
import { getToken, isTokenExpired } from '../utils/utils';
import axios from 'axios';
import { ViteEnv } from '../types/ViteEnv';
import { useLabels } from '../hooks/useLabels';
import { useContextHook } from '../helpers/ContextHelper';
import Labels from '../data/translations/Labels';

export interface AuthContext {
    isAuthenticated: boolean;
    logout: () => void;
    login: (email: string, password: string) => Promise<{ success: boolean; error?: string }>;
    register: (nickname: string, email: string, password: string) => Promise<{ success: boolean; error?: string }>;
}

const AuthContext = createContext<AuthContext | null>(null);
// eslint-disable-next-line react-refresh/only-export-components
export const useAuthContext = () => useContextHook(AuthContext);

export default function AuthContextProvider({ children }: React.PropsWithChildren) {
    const API_URL: ViteEnv['VITE_API_URL'] = import.meta.env.VITE_API_URL;
    const labels: Labels = useLabels();
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useLayoutEffect(() => {
        const checkTokenValidity = async () => {
            const tokenString = getToken();

            if (!tokenString) {
                setIsAuthenticated(false);
                return;
            }

            if (!isTokenExpired(tokenString)) {
                setIsAuthenticated(true);
                return;
            }

            axios
                .post(API_URL + 'refresh-token', {
                    // TODO: Check which token should be passed
                    refreshToken: tokenString.refreshToken
                })
                .then(response => {
                    const { accessToken } = response.data;
                    localStorage.setItem('user', JSON.stringify(accessToken));
                    setIsAuthenticated(true);
                })
                .catch(() => logout());
        };

        checkTokenValidity();
        const intervalId = setInterval(checkTokenValidity, 1000);

        return () => clearInterval(intervalId);
    }, [API_URL]);

    function login(email: string, password: string) {
        return axios
            .post(API_URL + 'login', {
                email,
                password
            })
            .then(response => {
                if (!isTokenExpired(response.data.accessToken)) {
                    localStorage.setItem('user', JSON.stringify(response.data.accessToken));
                    setIsAuthenticated(true);
                    return { success: true };
                } else {
                    return { success: false, error: labels.authContext.login.invalidToken };
                }
            })
            .catch(() => ({ success: false, error: labels.authContext.login.resultError }));
    }

    function logout() {
        setIsAuthenticated(false);
        localStorage.removeItem('user');
    }

    function register(nickname: string, email: string, password: string) {
        return axios
            .post(API_URL + 'register', {
                nickname,
                email,
                password
            })
            .then(() => ({ success: true }))
            .catch(() => ({ success: false, error: labels.authContext.register.resultError }));
    }

    return <AuthContext.Provider value={{ isAuthenticated, logout, login, register }}>{children}</AuthContext.Provider>;
}
