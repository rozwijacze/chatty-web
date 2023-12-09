import ThemeButton from '../ThemeButton/ThemeButton';
import LogoutButton from '../LogoutButton/LogoutButton';
import { ReactComponent as ContactsIcon } from '/src/assets/contacts.svg';
import { ReactComponent as MessagesIcon } from '/src/assets/messages.svg';
import { ReactComponent as SettingsIcon } from '/src/assets/settings.svg';
import { ViewType } from '../../types/ViewType';
import { ViteEnv } from '../../types/ViteEnv';
import './SideNav.scss';

interface Props {
    view: ViewType;
    setView: (view: ViewType) => void;
}

export default function SideNav({ view, setView }: Props) {
    const APP_NAME: ViteEnv['VITE_APP_NAME'] = import.meta.env.VITE_APP_NAME;

    return (
        <nav className="side-nav">
            <h1 className="logo-title" title={APP_NAME}>
                {APP_NAME}
            </h1>

            <ul className="side-nav__menu">
                <li
                    className={`side-nav__item ${view === ViewType.MESSAGES ? 'side-nav__item--active' : ''}`}
                    title={ViewType.MESSAGES}
                    onClick={() => {
                        setView(ViewType.MESSAGES);
                    }}>
                    <MessagesIcon />
                </li>
                <li
                    className={`side-nav__item ${view === ViewType.CONTACTS ? 'side-nav__item--active' : ''}`}
                    title={ViewType.CONTACTS}
                    onClick={() => {
                        setView(ViewType.CONTACTS);
                    }}>
                    <ContactsIcon />
                </li>
                <li
                    className={`side-nav__item ${view === ViewType.SETTINGS ? 'side-nav__item--active' : ''}`}
                    title={ViewType.SETTINGS}
                    onClick={() => {
                        setView(ViewType.SETTINGS);
                    }}>
                    <SettingsIcon />
                </li>
            </ul>

            <div className="side-nav__buttons">
                <LogoutButton />
                <ThemeButton />
            </div>
        </nav>
    );
}
