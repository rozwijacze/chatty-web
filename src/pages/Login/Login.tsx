import { ChangeEvent, useState } from 'react';
import './Login.scss';

export const Login = () => {

    const [formValue, setFormValue] = useState({loginValue: '', passwordValue: ''});

    const handleLoginChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormValue({ ...formValue, loginValue: e.target.value });
    };

    const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormValue({ ...formValue, passwordValue: e.target.value });
    };

    return (
        <>
            <div className="login-form">
                <label>
                    Login:
                    <input type="text" value={formValue.loginValue} onChange={handleLoginChange} />
                </label>
                <label>
                    Password:
                    <input type="password" value={formValue.passwordValue} onChange={handlePasswordChange} />
                </label>
                <button>Zaloguj sie</button>
            </div>
        </>
    );
};
