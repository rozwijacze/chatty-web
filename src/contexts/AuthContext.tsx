import { createContext, useContext, useLayoutEffect, useState } from 'react';
import { getToken, isTokenExpired } from '../utils/utils';
import axios from 'axios';
import { ViteEnv } from '../types/ViteEnv';
import { useLabels } from '../hooks/useLabels';

interface AuthContext {
    isAuthenticated: boolean;
    logout: () => void;
    login: (email: string, password: string) => Promise<{ success: boolean; error?: string }>;
    register: (nickname: string, email: string, password: string) => Promise<{ success: boolean; error?: string }>;
}

const API_URL: ViteEnv['VITE_API_URL'] = import.meta.env.VITE_API_URL;

export const AuthContext = createContext<AuthContext | null>(null);

export const AuthProvider = ({ children }: React.PropsWithChildren) => {
    const labels = useLabels();
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useLayoutEffect(() => {
        const checkTokenValidity = async () => {
            const tokenString = getToken();

            if (tokenString && isTokenExpired(tokenString)) {
                try {
                    const response = await axios.post(API_URL + 'refresh-token', {
                        // TODO: Check which token should be passed
                        refreshToken: getToken().refreshToken
                    });

                    const { accessToken } = response.data;

                    localStorage.setItem('user', JSON.stringify(accessToken));
                    setIsAuthenticated(true);
                } catch (error) {
                    logout();
                }
            }
        };

        checkTokenValidity();
        const intervalId = setInterval(checkTokenValidity, 10 * 60 * 1000);

        return () => clearInterval(intervalId);
    }, []);

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
            .catch(() => {
                return { success: false, error: labels.authContext.login.resultError };
            });
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
            .then(() => {
                return { success: true };
            })
            .catch(() => {
                return { success: false, error: labels.authContext.register.resultError };
            });
    }

    return <AuthContext.Provider value={{ isAuthenticated, logout, login, register }}>{children}</AuthContext.Provider>;
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
    const context = useContext(AuthContext);

    if (!context) {
        throw Error('Component that uses AuthContext is not wrapped by a provider.');
    }

    return context;
};
