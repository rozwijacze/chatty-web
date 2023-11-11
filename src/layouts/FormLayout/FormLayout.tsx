import { Link } from 'react-router-dom';
import './FormLayout.scss';
import { ViewType } from '../../types/ViewType';
import Login from '../../pages/Login/Login';
import Register from '../../pages/Register/Register';
import ThemeButton from '../../components/ThemeButton/ThemeButton';
import { ViteEnv } from '../../types/ViteEnv';

interface Props {
    view: ViewType.LOGIN | ViewType.REGISTER;
}

export default function FormLayout(props: Props) {
    const APP_NAME: ViteEnv['VITE_APP_NAME'] = import.meta.env.VITE_APP_NAME;
    let formEl: JSX.Element;

    switch (props.view) {
        case ViewType.REGISTER:
            formEl = <Register />;
            break;

        default:
            formEl = <Login />;
            break;
    }

    return (
        <main className="form-layout">
            <ThemeButton />
            <div className="form-layout__wrapper">
                <div className="form-layout__title">
                    <h1 className="logo-title">{APP_NAME}</h1>
                    <h2>It is not a messenger clone</h2>
                    {props.view === ViewType.LOGIN && (
                        <p>
                            Create an account <Link to="/register">here</Link>
                        </p>
                    )}
                </div>

                <div className="form-layout__content">{formEl}</div>
            </div>
        </main>
    );
}
