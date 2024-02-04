import { jwtDecode } from 'jwt-decode';
import JwtData from '@customTypes/JwtData';
import { getToken } from './TokenHelper';

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
