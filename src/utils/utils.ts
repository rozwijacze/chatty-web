import { jwtDecode } from 'jwt-decode';
import { JwtData } from '../types/JwtData';

export function isTokenExpired(token: string) {
    try {
        const decodedToken = jwtDecode(token);
        return decodedToken.exp! < Date.now() / 1000;
    } catch (error) {
        console.error('Error decoding token:', error);
        return true;
    }
}

export function getToken() {
    const tokenString = localStorage.getItem('user');
    return tokenString ? JSON.parse(tokenString) : null;
}

export function getUserData() {
    const token = getToken();

    if (!token) {
        return null;
    }

    const decodedToken: JwtData = jwtDecode(token);
    const userData = {
        id: decodedToken.id,
        email: decodedToken.email,
        name: decodedToken.name,
        surname: decodedToken.surname
    };

    return userData;
}
