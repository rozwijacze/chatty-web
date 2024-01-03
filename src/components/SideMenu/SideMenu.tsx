import ThemeButton from '../ThemeButton/ThemeButton';
import ButtonItem from '../ButtonItem/ButtonItem';
import { ReactComponent as ContactsIcon } from '/src/assets/contacts.svg';
import { ReactComponent as MessagesIcon } from '/src/assets/messages.svg';
import { ReactComponent as SettingsIcon } from '/src/assets/settings.svg';
import { ReactComponent as LogoutIcon } from '/src/assets/logout.svg';
import { ReactComponent as UserIcon } from '/src/assets/user.svg';
import { ViewType } from '../../types/ViewType';
import { ViteEnv } from '../../types/ViteEnv';
import './SideMenu.scss';
import { getUserData } from '../../utils/utils';
import { AuthContext, useAuthContext } from '../../contexts/AuthContext';
import { useLabels } from '../../hooks/useLabels';

interface Props {
    view: ViewType;
    setView: (view: ViewType) => void;
}

export default function SideMenu({ view, setView }: Props) {
    const APP_NAME: ViteEnv['VITE_APP_NAME'] = import.meta.env.VITE_APP_NAME;
    const labels = useLabels();
    const userData = getUserData();
    const { logout }: AuthContext = useAuthContext();

    return (
        <div className="side-menu">
            <h1 className="side-menu__logo" title={APP_NAME}>
                {APP_NAME}
            </h1>

            <div className="side-menu__content">
                <div className="side-menu__user">
                    <UserIcon />
                    <p>{userData?.name}</p>
                </div>

                <nav className="side-menu__nav">
                    <ButtonItem
                        clickHandler={() => setView(ViewType.MESSAGES)}
                        title={ViewType.MESSAGES}
                        children={<MessagesIcon />}
                        isActive={view === ViewType.MESSAGES}
                        modificators={['sidenav']}
                    />
                    <ButtonItem
                        clickHandler={() => setView(ViewType.CONTACTS)}
                        title={ViewType.CONTACTS}
                        children={<ContactsIcon />}
                        isActive={view === ViewType.CONTACTS}
                        modificators={['sidenav']}
                    />
                    <ButtonItem
                        clickHandler={() => setView(ViewType.SETTINGS)}
                        title={ViewType.SETTINGS}
                        children={<SettingsIcon />}
                        isActive={view === ViewType.SETTINGS}
                        modificators={['sidenav']}
                    />
                </nav>

                <div className="side-menu__buttons">
                    <ButtonItem
                        clickHandler={logout}
                        title={labels.buttons.logout}
                        children={<LogoutIcon />}
                        modificators={['sidenav', labels.buttons.logout.toLowerCase()]}
                    />
                    <ThemeButton />
                </div>
            </div>
        </div>
    );
}
