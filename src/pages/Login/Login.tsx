import { ReactComponent as UserIcon } from '/src/assets/user.svg';
import { ReactComponent as PasswordIcon } from '/src/assets/password.svg';
import './Login.scss';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { useLabels } from '../../hooks/useLabels';
import { useAuth } from '../../contexts/AuthContext';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

interface LoginForm {
    email: string;
    password: string;
}

export default function Login() {
    const labels = useLabels();
    const { login } = useAuth();
    const [serverError, setServerError] = useState('');
    const loginSchema = yup.object().shape({
        email: yup.string().email().required(),
        password: yup.string().required()
    });

    const { register, handleSubmit } = useForm<LoginForm>({
        resolver: yupResolver(loginSchema)
    });

    function onSubmit(data: LoginForm) {
        const { email, password } = data;
        login(email, password).then(response => {
            if (!response.success) setServerError(response.error || labels.login.results.unusualError);
        });
    }

    return (
        <>
            <form className="login" onSubmit={handleSubmit(onSubmit)}>
                <div className="login__input">
                    <UserIcon />
                    <input
                        {...register('email')}
                        type="email"
                        name="email"
                        placeholder={labels.login.placeholder.email}
                        autoComplete="email"
                    />
                </div>

                <div className="login__input">
                    <PasswordIcon />
                    <input
                        {...register('password')}
                        type="password"
                        name="password"
                        placeholder={labels.login.placeholder.password}
                        autoComplete="current-password"
                    />
                </div>

                <button className="button" type="submit">
                    {labels.login.button}
                </button>
            </form>
            {serverError && <p className="login__error">{serverError}</p>}
        </>
    );
}
