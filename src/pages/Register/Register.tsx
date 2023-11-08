import { ChangeEvent, useState } from 'react';
import './Register.scss';
import AuthenticationService from '../../services/AuthenticationService';
import { Link } from 'react-router-dom';

export const Register = () => {
    const handleRegister = (e: React.FormEvent) => {
        e.preventDefault();
        const { username, email, password } = registerForm;

        AuthenticationService.register(username, email, password).then(
            response => {
                console.log(response);
            },
            error => {
                console.log('error msg:');

                console.log(error);
            }
        );
    };

    const [registerForm, setRegisterForm] = useState({
        username: '',
        email: '',
        password: '',
        repeatPassword: ''
    });

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setRegisterForm({ ...registerForm, [name]: value });
    };

    const { username, email, password, repeatPassword } = registerForm;

    return (
        <form className="register" onSubmit={handleRegister}>
            <div className="register__input">
                <label htmlFor="username">Username:</label>
                <input type="text" name="username" value={username} onChange={handleInputChange} />
            </div>

            <div className="register__input">
                <label htmlFor="email">Email:</label>
                <input type="email" name="email" value={email} onChange={handleInputChange} />
            </div>

            <div className="register__input">
                <label htmlFor="password">Password:</label>
                <input type="password" name="password" value={password} onChange={handleInputChange} />
            </div>

            <div className="register__input">
                <label htmlFor="repeatPassword">Repeat password:</label>
                <input type="password" name="repeatPassword" value={repeatPassword} onChange={handleInputChange} />
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
