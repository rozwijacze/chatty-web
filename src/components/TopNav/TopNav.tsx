import { ThemeButton } from '../ThemeButton';
import './TopNav.scss';

export const TopNav = () => {
    return (
        <div className="top-nav">
            <div className="top-nav__logo">chatty</div>
            <ThemeButton />
            <div className="top-nav__user-settings">user-icon</div>
        </div>
    );
};
