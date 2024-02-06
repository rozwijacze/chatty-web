import ButtonItem from '@components/common/ButtonItem/ButtonItem';
import { ReactComponent as ContactsIcon } from '@assets/contacts.svg';
import { ReactComponent as MessagesIcon } from '@assets/messages.svg';
import { ReactComponent as SettingsIcon } from '@assets/settings.svg';
import { ReactComponent as LogoutIcon } from '@assets/logout.svg';
import { ReactComponent as UserIcon } from '@assets/user.svg';
import ViewType from '@customTypes/ViewType';
import './SideMenu.scss';
import { getUserData } from '@helpers/UserHelper';
import { useAuthContext } from '@contexts/AuthContext';
import { toggleTheme } from '@helpers/ThemeHelper';
import useLabels from '@hooks/useLabels';

interface Props {
    view: ViewType;
    setView: (view: ViewType) => void;
}

export default function SideMenu({ view, setView }: Props) {
    const labels = useLabels();
    const userData = getUserData();
    const { logout } = useAuthContext();

    return (
        <div className="side-menu">
            <h1 className="side-menu__logo" title={labels.appName}>
                {labels.appName}
            </h1>

            <div className="side-menu__content">
                <div className="side-menu__user">
                    <UserIcon />
                    <p>{userData?.name}</p>
                </div>

                <nav className="side-menu__nav">
                    <ButtonItem
                        clickHandler={() => setView(ViewType.CONVERSATIONS)}
                        title={ViewType.CONVERSATIONS}
                        children={<MessagesIcon />}
                        isActive={view === ViewType.CONVERSATIONS}
                    />
                    <ButtonItem
                        clickHandler={() => setView(ViewType.CONTACTS)}
                        title={ViewType.CONTACTS}
                        children={<ContactsIcon />}
                        isActive={view === ViewType.CONTACTS}
                    />
                    <ButtonItem
                        clickHandler={() => setView(ViewType.SETTINGS)}
                        title={ViewType.SETTINGS}
                        children={<SettingsIcon />}
                        isActive={view === ViewType.SETTINGS}
                    />
                </nav>

                <div className="side-menu__buttons">
                    <ButtonItem clickHandler={logout} title={labels.buttons.logout} children={<LogoutIcon />} />
                    <ButtonItem clickHandler={toggleTheme} title={labels.buttons.theme} modificators={['theme']}></ButtonItem>
                </div>
            </div>
        </div>
    );
}
