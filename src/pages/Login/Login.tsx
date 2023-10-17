import { ChangeEvent, useState } from 'react';
import './Login.scss';

export const Login = () => {

    const [loginForm, setLoginForm] = useState({email: '', password: ''});


    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setLoginForm({ ...loginForm, [name]: value });
    }

    const {email, password} = loginForm;

    return (
        <>
            <div className="login-form">
                <label>
                    Login:
                    <input type="email" name="email" value={email} onChange={handleInputChange} />
                </label>
                <label>
                    Password:
                    <input type="password" name="password" value={password} onChange={handleInputChange} />
                </label>
                <button>Zaloguj sie</button>
            </div>
        </>
    );
};
