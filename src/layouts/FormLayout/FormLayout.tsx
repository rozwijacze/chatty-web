import { Link } from 'react-router-dom';
import { useLocaleContext } from '@contexts/LocaleContext';
import './FormLayout.scss';
import ViewType from '@customTypes/ViewType';
import Login from '@pages/Login/Login';
import Register from '@pages/Register/Register';
import useLabels from '@hooks/useLabels';
import LocaleButton from '@components/layout/LocaleButton/LocaleButton';
import ButtonItem from '@components/common/ButtonItem/ButtonItem';
import useTheme from '@hooks/useTheme';

type Props = {
    view: ViewType;
};

export default function FormLayout({ view }: Props) {
    const { toggleTheme } = useTheme();
    const { toggleLocale } = useLocaleContext();
    const labels = useLabels();

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
                    <h1>{import.meta.env.VITE_APP_NAME}</h1>
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
                <ButtonItem
                    clickHandler={toggleLocale}
                    title={labels.buttons.locale}
                    children={<LocaleButton />}
                    modificators={['locale']}></ButtonItem>
                <ButtonItem clickHandler={toggleTheme} title={labels.buttons.theme} modificators={['theme']}></ButtonItem>
            </div>
        </main>
    );
}
