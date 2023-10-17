import { ChangeEvent, useState } from 'react';
import './Register.scss';

export const Register = () => {
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
        <>
            <div className="register-form">
                <label>
                    Username:
                    <input type="text" name="username" value={username} onChange={handleInputChange} />
                </label>
                <label>
                    Email:
                    <input type="email" name="email" value={email} onChange={handleInputChange} />
                </label>
                <label>
                    Password:
                    <input type="password" name="password" value={password} onChange={handleInputChange} />
                </label>
                <label>
                    Repeat Password:
                    <input type="password" name="repeatPassword" value={repeatPassword} onChange={handleInputChange} />
                </label>
                <button>Zarejestruj się</button>
            </div>
        </>
    );
};
