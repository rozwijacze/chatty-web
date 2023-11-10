import axios from 'axios';
import { ViteEnv } from '../types/ViteEnv';

const API_URL: ViteEnv = import.meta.env.VITE_API_URL;

class AuthService {
    login(email: string, password: string) {
        return axios
            .post(API_URL + 'login', {
                email,
                password
            })
            .then(response => {
                if (response.data.accessToken) {
                    localStorage.setItem('user', JSON.stringify(response.data));
                }

                return response.data;
            });
    }

    logout() {
        localStorage.removeItem('user');
    }

    register(nickname: string, email: string, password: string) {
        return axios.post(
            API_URL + 'register',
            {
                nickname,
                email,
                password
            },
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        );
    }

    getCurrentUser() {
        const userStr = localStorage.getItem('user');
        if (userStr) return JSON.parse(userStr);

        return null;
    }
}

export default new AuthService();
