import { ReactComponent as UserIcon } from '/src/assets/username.svg';
import { ReactComponent as PasswordIcon } from '/src/assets/password.svg';
import './Login.scss';
import AuthenticationService from '../../services/AuthenticationService';
import { useForm } from 'react-hook-form';
import { useState } from 'react';

interface LoginForm {
    email: string;
    password: string;
}

export default function Login() {
    const [serverError, setServerError] = useState('');

    const { register, handleSubmit } = useForm<LoginForm>();

    function onSubmit(data: LoginForm) {
        const { email, password } = data;
        AuthenticationService.login(email, password).then(
            () => {},
            error => {
                setServerError(error.message);
            }
        );
    }

    return (
        <div>
            <form className="login" onSubmit={handleSubmit(onSubmit)}>
                <div className="login__input">
                    <UserIcon />
                    <input {...register('email')} type="email" name="email" placeholder="E-mail" autoComplete="email" />
                </div>

                <div className="login__input">
                    <PasswordIcon />
                    <input
                        {...register('password')}
                        type="password"
                        name="password"
                        placeholder="Password"
                        autoComplete="current-password"
                    />
                </div>

                <button className="button" type="submit">
                    Login
                </button>
            </form>
            {serverError && <p className="login__error">{serverError}</p>}
        </div>
    );
}
