import { ChangeEvent, useState } from 'react';
import './Register.scss';
import AuthenticationService from '../../services/AuthenticationService';
import { Link } from 'react-router-dom';

export const Register = () => {
    const handleRegister = (e: React.FormEvent) => {
        e.preventDefault();
        const { nickname, email, password } = registerForm;

        AuthenticationService.register(nickname, email, password).then(
            response => {
                console.log(response);
            },
            error => {
                console.log('error msg:', error);
            }
        );
    };

    const [registerForm, setRegisterForm] = useState({
        nickname: '',
        email: '',
        password: '',
        repeatPassword: ''
    });

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setRegisterForm({ ...registerForm, [name]: value });
    };

    const { nickname, email, password, repeatPassword } = registerForm;

    return (
        <form className="register" onSubmit={handleRegister}>
            <div className="register__input">
                <label htmlFor="nickname">Nickname:</label>

                <input type="text" name="nickname" value={nickname} onChange={handleInputChange} />
            </div>

            <div className="register__input">
                <label htmlFor="email">E-mail:</label>

                <input type="email" name="email" value={email} onChange={handleInputChange} />
            </div>

            <div className="register__input">
                <label htmlFor="password">Password:</label>

                <input type="password" name="password" value={password} autoComplete="password" onChange={handleInputChange} />
            </div>

            <div className="register__input">
                <label htmlFor="repeatPassword">Repeat password:</label>

                <input
                    type="password"
                    name="repeatPassword"
                    value={repeatPassword}
                    autoComplete="repeatPassword"
                    onChange={handleInputChange}
                />
            </div>

            <div className="register__buttons">
                <button className="button" type="submit">
                    Register
                </button>

                <Link to="/login" className="button button--flat">
                    Back
                </Link>
            </div>
        </form>
    );
};
