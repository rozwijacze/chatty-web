import { jwtDecode } from 'jwt-decode';

export function logString(value: string) {
    console.log(value);
}

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

export function isUserLoggedIn() {
    const token = getToken();
    const isTokenValid = !isTokenExpired(token);
    return token && isTokenValid;
}
