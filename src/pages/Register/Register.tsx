import { ChangeEvent, useState } from 'react';
import './Register.scss';
import AuthenticationService from '../../services/AuthenticationService';
import { Link } from 'react-router-dom';
import { useLabels } from '../../hooks/useLabels';

export default function Register() {
    const labels = useLabels();

    function handleRegister(e: React.FormEvent) {
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
    }

    const [registerForm, setRegisterForm] = useState({
        nickname: '',
        email: '',
        password: '',
        repeatPassword: ''
    });

    function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target;
        setRegisterForm({ ...registerForm, [name]: value });
    }

    const { nickname, email, password, repeatPassword } = registerForm;

    return (
        <form className="register" onSubmit={handleRegister}>
            <div className="register__input">
                <label htmlFor="nickname">{labels.register.labels.nickname}</label>

                <input type="text" id="nickname" name="nickname" value={nickname} autoComplete="given-name" onChange={handleInputChange} />
            </div>

            <div className="register__input">
                <label htmlFor="email">{labels.register.labels.email}</label>

                <input type="email" id="email" name="email" value={email} autoComplete="email" onChange={handleInputChange} />
            </div>

            <div className="register__input">
                <label htmlFor="password">{labels.register.labels.password}</label>

                <input
                    type="password"
                    id="password"
                    name="password"
                    value={password}
                    autoComplete="current-password"
                    onChange={handleInputChange}
                />
            </div>

            <div className="register__input">
                <label htmlFor="repeatPassword">{labels.register.labels.repeatPassword}</label>

                <input
                    type="password"
                    id="repeatPassword"
                    name="repeatPassword"
                    value={repeatPassword}
                    autoComplete="current-password"
                    onChange={handleInputChange}
                />
            </div>

            <div className="register__buttons">
                <button className="button" type="submit">
                    {labels.register.buttons.register}
                </button>

                <Link to="/login" className="button button--flat">
                    {labels.register.buttons.link}
                </Link>
            </div>
        </form>
    );
}
