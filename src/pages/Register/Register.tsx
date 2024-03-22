import './Register.scss';
import { Link } from 'react-router-dom';
import { FieldValues, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import useLabels from '@hooks/useLabels';
import { useAuthContext } from '@contexts/AuthContext';

export default function Register() {
    const [isRegistered, setIsRegistered] = useState(false);
    const [serverError, setServerError] = useState('');
    const labels = useLabels();
    const authContextValues = useAuthContext();

    const registerSchema = yup.object().shape({
        nickname: yup.string().min(3).max(16).required(),
        name: yup.string().test(
            'empty-check',
            'Name must be at least 2 characters',
             name => name ? name.length >= 2 || name.length == 0 : true
        ),
        surname: yup.string().test(
            'empty-check',
            'Surname must be at least 3 characters',
             surname => surname ? surname.length >= 3 || surname.length == 0 : true
        ),
        email: yup.string().max(64).email().required(),
        password: yup.string().min(7).max(32).required(),
        repeatPassword: yup.string().oneOf([yup.ref('password')], labels.register.formErrors.repeatPassword)
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
        const { nickname, name, surname, email, password } = data;

        authContextValues.register(nickname, name, surname, email, password).then(response => {
            if (response.success) {
                setIsRegistered(true);
                reset();
            } else {
                setServerError(response.error || labels.register.results.unusualError);
            }
        });
    }

    function resetStatus() {
        setIsRegistered(false);
        setServerError('');
    }

    return (
        <>
            <form className="register" onSubmit={handleSubmit(onSubmit)}>
                <div className="register__input">
                    <label htmlFor="nickname">{labels.formLabels.nickname}</label>
                    <p>{errors.nickname?.message}</p>
                    <input {...register('nickname')} required type="text" id="nickname" name="nickname" autoComplete="given-name" />
                </div>
                <div className="register__input">
                    <label htmlFor="name">{labels.formLabels.name}</label>
                    <p>{errors.name?.message}</p>
                    <input {...register('name')} type="text" id="name" name="name" autoComplete="given-name" />
                </div>

                <div className="register__input">
                    <label htmlFor="surname">{labels.formLabels.surname}</label>
                    <p>{errors.surname?.message}</p>
                    <input {...register('surname')} type="text" id="surname" name="surname" autoComplete="given-name" />
                </div>

                <div className="register__input">
                    <label htmlFor="email">{labels.formLabels.email}</label>
                    <p>{errors.email?.message?.toUpperCase()}</p>
                    <input {...register('email')} required type="email" id="email" name="email" autoComplete="email" />
                </div>

                <div className="register__input">
                    <label htmlFor="password">{labels.formLabels.password}</label>
                    <p>{errors.password?.message?.toUpperCase()}</p>
                    <input {...register('password')} required type="password" id="password" name="password" autoComplete="current-password" />
                </div>

                <div className="register__input">
                    <label htmlFor="repeatPassword">{labels.formLabels.repeatPassword}</label>
                    <p>{errors.repeatPassword?.message?.toUpperCase()}</p>
                    <input
                        required
                        {...register('repeatPassword')}
                        type="password"
                        id="repeatPassword"
                        name="repeatPassword"
                        autoComplete="current-password"
                    />
                </div>

                <div className="register__buttons">
                    <button className="button button--text-large" type="submit">
                        {labels.buttons.register}
                    </button>

                    <Link to="/" className="button button--text-large button--flat">
                        {labels.buttons.back}
                    </Link>
                </div>
            </form>
            {isRegistered && <p className="register__result register__result--success">{labels.register.results.succeed}</p>}
            {serverError && <p className="register__result register__result--fail">{serverError}</p>}
        </>
    );
}
