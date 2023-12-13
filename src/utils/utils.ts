import { jwtDecode } from 'jwt-decode';

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

export function getUsername() {
    const username = '';
    const token = getToken();

    if (!token) {
        return username;
    }

    const decodedToken = jwtDecode(token);
    return String(decodedToken.sub);
}
