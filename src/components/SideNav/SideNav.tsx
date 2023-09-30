import { ThemeButton } from '../ThemeButton/ThemeButton';
import { ReactComponent as ContactsIcon } from '/src/assets/contacts.svg';
import './SideNav.scss';

export const SideNav = () => {
    return (
        <nav className="side-nav">
            <ul className="side-nav__menu">
                <li>
                    <ContactsIcon className="side-nav__contacts" />
                </li>
            </ul>
            <ThemeButton />
        </nav>
    );
};
