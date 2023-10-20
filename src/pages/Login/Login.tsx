import { ChangeEvent, useState } from 'react';
import './Login.scss';
import AuthenticationService from '../../services/AuthenticationService';

export const Login = () => {

    const handleLogin = () => {
        const { email, password } = loginForm;

        AuthenticationService.login(email, password).then(
            response => {
                console.log(response);
            },
            error => {
                console.log('error msg:');
                
                console.log(error);
            }
        );
    };

    const [loginForm, setLoginForm] = useState({ email: '', password: '' });

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setLoginForm({ ...loginForm, [name]: value });
    };

    const { email, password } = loginForm;

    return (
        <>
            <div className="login-form">
                <label>
                    Login:
                    <input type="email" name="email" value={email} onChange={handleInputChange} />
                </label>
                <label>
                    Password:
                    <input type="password" name="password" value={password} onChange={handleInputChange} />
                </label>
                <button>Zaloguj sie</button>
            </div>
        </>
    );
};
