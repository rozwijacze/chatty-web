import { JwtPayload } from 'jwt-decode';

export interface JwtData extends JwtPayload {
    id: string;
    email: string;
    name: string;
    surname: string;
}
