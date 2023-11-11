import { ChangeEvent, useState } from 'react';
import { ReactComponent as UserIcon } from '/src/assets/username.svg';
import { ReactComponent as PasswordIcon } from '/src/assets/password.svg';
import './Login.scss';
import AuthenticationService from '../../services/AuthenticationService';

export default function Login() {
    function handleLogin(e: React.FormEvent) {
        e.preventDefault();

        AuthenticationService.login(email, password).then(
            response => {
                console.log(response);
            },
            error => {
                console.log('error msg:', error);
            }
        );
    }

    const [loginForm, setLoginForm] = useState({ email: '', password: '' });

    function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target;
        setLoginForm({ ...loginForm, [name]: value });
    }

    const { email, password } = loginForm;

    return (
        <form className="login" onSubmit={handleLogin}>
            <div className="login__input">
                <UserIcon />

                <input type="email" name="email" value={email} placeholder="E-mail" autoComplete="email" onChange={handleInputChange} />
            </div>

            <div className="login__input">
                <PasswordIcon />

                <input
                    type="password"
                    name="password"
                    value={password}
                    placeholder="Password"
                    autoComplete="current-password"
                    onChange={handleInputChange}
                />
            </div>

            <button className="button" type="submit">
                Login
            </button>
        </form>
    );
}
