import './AccountsLayout.scss';

interface Props {
    form: JSX.Element;
}

export const AccountsLayout = (props: Props) => {
    return (
        <div className="form-layout">
            <div className="form-layout__left">
                <h1>Chatty</h1>
                <p>Appka do rozmowy here</p>
            </div>
            <div className="form-layout__right">
                <div className="form-layout__form-name">
                    <h2>Title - register, login, change password etc</h2>
                </div>
                <div className="form-layout__form-container">{props.form}</div>
            </div>
        </div>
    );
};
