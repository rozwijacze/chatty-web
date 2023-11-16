import { ChangeEvent, useState } from 'react';
import { ReactComponent as UserIcon } from '/src/assets/username.svg';
import { ReactComponent as PasswordIcon } from '/src/assets/password.svg';
import './Login.scss';
import AuthenticationService from '../../services/AuthenticationService';
import { useLabels } from '../../hooks/useLabels';

export default function Login() {
    const labels = useLabels();

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

                <input
                    type="email"
                    name="email"
                    value={email}
                    placeholder={labels.login.placeholder.email}
                    autoComplete="email"
                    onChange={handleInputChange}
                />
            </div>

            <div className="login__input">
                <PasswordIcon />

                <input
                    type="password"
                    name="password"
                    value={password}
                    placeholder={labels.login.placeholder.password}
                    autoComplete="current-password"
                    onChange={handleInputChange}
                />
            </div>

            <button className="button" type="submit">
                {labels.login.button}
            </button>
        </form>
    );
}
