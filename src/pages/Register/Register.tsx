import './Register.scss';
import AuthenticationService from '../../services/AuthenticationService';
import { Link } from 'react-router-dom';
import { FieldValues, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';

export default function Register() {
    const [isRegistered, setIsRegistered] = useState(false);
    const [serverError, setServerError] = useState('');

    const registerSchema = yup.object().shape({
        nickname: yup.string().min(3).required(),
        email: yup.string().email().required(),
        password: yup.string().min(7).max(32).required(),
        repeatPassword: yup.string().oneOf([yup.ref('password')], 'Passwords are not the same.')
    });

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(registerSchema)
    });

    function onSubmit(data: FieldValues) {
        resetStatus();
        const { nickname, email, password } = data;
        AuthenticationService.register(nickname, email, password).then(
            () => {
                setIsRegistered(true);
                reset();
            },
            error => {
                setServerError(error.message);
            }
        );
    }

    function resetStatus() {
        setIsRegistered(false);
        setServerError('');
    }

    return (
        <div>
            <form className="register" onSubmit={handleSubmit(onSubmit)}>
                <div className="register__input">
                    <label htmlFor="nickname">Nickname:</label>
                    <p>{errors.nickname?.message}</p>
                    <input {...register('nickname')} required type="text" id="nickname" name="nickname" autoComplete="given-name" />
                </div>

                <div className="register__input">
                    <label htmlFor="email">E-mail:</label>
                    <p>{errors.email?.message?.toUpperCase()}</p>
                    <input {...register('email')} type="email" id="email" name="email" autoComplete="email" />
                </div>

                <div className="register__input">
                    <label htmlFor="password">Password:</label>
                    <p>{errors.password?.message?.toUpperCase()}</p>
                    <input {...register('password')} type="password" id="password" name="password" autoComplete="current-password" />
                </div>

                <div className="register__input">
                    <label htmlFor="repeatPassword">Repeat password:</label>
                    <p>{errors.repeatPassword?.message?.toUpperCase()}</p>
                    <input
                        {...register('repeatPassword')}
                        type="password"
                        id="repeatPassword"
                        name="repeatPassword"
                        autoComplete="current-password"
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
            {isRegistered && <p className="register__result register__result--success">Registration successful!</p>}
            {serverError && <p className="register__result register__result--fail">{serverError}</p>}
        </div>
    );
}
