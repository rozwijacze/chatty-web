import { ReactComponent as UserIcon } from '/src/assets/username.svg';
import { ReactComponent as PasswordIcon } from '/src/assets/password.svg';
import './Login.scss';
import AuthenticationService from '../../services/AuthenticationService';
import { useForm } from 'react-hook-form';

interface LoginForm {
    email: string;
    password: string;
}

export default function Login() {
    const { register, handleSubmit } = useForm<LoginForm>();

    function onSubmit(data: LoginForm) {
        const { email, password } = data;
        AuthenticationService.login(email, password).then(
            response => {
                console.log(response);
            },
            error => {
                console.log('error msg:', error);
            }
        );
    }

    return (
        <form className="login" onSubmit={handleSubmit(onSubmit)}>
            <div className="login__input">
                <UserIcon />
                <input {...register('email')} type="email" name="email" placeholder="E-mail" autoComplete="email" />
            </div>

            <div className="login__input">
                <PasswordIcon />
                <input {...register('password')} type="password" name="password" placeholder="Password" autoComplete="current-password" />
            </div>

            <button className="button" type="submit">
                Login
            </button>
        </form>
    );
}
