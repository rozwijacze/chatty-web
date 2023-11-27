import { Link } from 'react-router-dom';
import './FormLayout.scss';
import { ViewType } from '../../types/ViewType';
import Login from '../../pages/Login/Login';
import Register from '../../pages/Register/Register';
import ThemeButton from '../../components/ThemeButton/ThemeButton';
import { ViteEnv } from '../../types/ViteEnv';
import { useLabels } from '../../hooks/useLabels';
import LocaleButton from '../../components/LocaleButton/LocaleButton';

interface LoginProps {}

interface RegisterProps {}

type Props = {
    view: ViewType.LOGIN | ViewType.REGISTER;
} & (LoginProps | RegisterProps);

export default function FormLayout(props: Props) {
    const labels = useLabels();
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
            <div className="form-layout__wrapper">
                <div className="form-layout__title">
                    <h1 className="logo-title">{APP_NAME}</h1>
                    <h2>{labels.formLayout.subtitle}</h2>
                    {props.view === ViewType.LOGIN && (
                        <p>
                            {labels.formLayout.description.label}
                            <Link to="/register">{labels.formLayout.description.link}</Link>
                        </p>
                    )}
                </div>

                <div className="form-layout__content">{formEl}</div>
            </div>

            <div className="form-layout__buttons">
                <LocaleButton />
                <ThemeButton />
            </div>
        </main>
    );
}
