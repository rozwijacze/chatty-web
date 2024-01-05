import { Link } from 'react-router-dom';
import './FormLayout.scss';
import { ViewType } from '@customTypes/ViewType';
import Login from '@pages/Login/Login';
import Register from '@pages/Register/Register';
import ThemeButton from '@components/ThemeButton/ThemeButton';
import { ViteEnv } from '@customTypes/ViteEnv';
import { useLabels } from '@hooks/useLabels';
import LocaleButton from '@components/LocaleButton/LocaleButton';
import Labels from '@data/translations/Labels';

type Props = {
    view: ViewType;
};

export default function FormLayout({ view }: Props) {
    const labels: Labels = useLabels();
    const APP_NAME: ViteEnv['VITE_APP_NAME'] = import.meta.env.VITE_APP_NAME;
    let formEl: JSX.Element;
    let showRegisterLink = false;

    switch (view) {
        default:
            formEl = <Login />;
            showRegisterLink = true;
            break;

        case ViewType.REGISTER:
            formEl = <Register />;
            break;
    }

    return (
        <main className="form-layout">
            <div className="form-layout__wrapper">
                <div className="form-layout__title">
                    <h1 className="form-layout__logo">{APP_NAME}</h1>
                    <h2>{labels.formLayout.subtitle}</h2>
                    {showRegisterLink && (
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
