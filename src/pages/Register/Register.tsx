import './Register.scss';
import AuthenticationService from '../../services/AuthenticationService';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

interface RegisterForm {
    nickname: string;
    email: string;
    password: string;
    repeatPassword: string;
}

export default function Register() {
    const {
        register,
        handleSubmit
    } = useForm<RegisterForm>();

    function onSubmit(data: RegisterForm) {
        const { nickname, email, password } = data;
        AuthenticationService.register(nickname, email, password).then(
            response => {
                console.log(response);
            },
            error => {
                console.log('error msg:', error);
            }
        );
    }

    return (
        <form className="register" onSubmit={handleSubmit(onSubmit)}>
            <div className="register__input">
                <label htmlFor="nickname">Nickname:</label>

                <input {...register('nickname')} required type="text" id="nickname" name="nickname" autoComplete="given-name" />
            </div>

            <div className="register__input">
                <label htmlFor="email">E-mail:</label>

                <input {...register('email')} type="email" id="email" name="email" autoComplete="email" />
            </div>

            <div className="register__input">
                <label htmlFor="password">Password:</label>

                <input {...register('password')} type="password" id="password" name="password" autoComplete="current-password" />
            </div>

            <div className="register__input">
                <label htmlFor="repeatPassword">Repeat password:</label>

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
    );
}
