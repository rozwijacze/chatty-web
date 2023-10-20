import { Login } from '../../pages/Login/Login';
import { Register } from '../../pages/Register/Register';
import './AccountsLayout.scss';

interface Props {
    form: string; // Specifies the type of form to render (e.g., "Login" or "Register").
}

interface ListOfComponents {
    [key: string]: JSX.Element;
}

export const AccountsLayout = (props: Props) => {
    const formComponents: ListOfComponents = {
        Login: <Login />,
        Register: <Register />
    };

    const renderForm = (formType: string) => {
        return formComponents[formType] || formComponents['Login'];
    };

    return (
        <>
            <div className="form-layout">
                <div className="form-layout__left">
                    <h1>Chatty</h1>
                    <p>Appka do rozmowy here</p>
                </div>
                <div className="form-layout__right">
                    <div className="form-layout__form-name">
                        <h2>Title - register, login, change password etc</h2>
                    </div>
                    <div className="form-layout__form-container">{renderForm(props.form)}</div>
                </div>
            </div>
        </>
    );
};
