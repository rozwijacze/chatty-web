import { useAuth } from '../../contexts/AuthContext';
import { isUserLoggedIn } from '../../utils/utils';
import { ReactComponent as LogoutIcon } from '/src/assets/logout.svg';
import './LogoutButton.scss';

export default function LogoutButton() {
    const { logout } = useAuth();

    function handleLogout() {
        isUserLoggedIn() ? logout() : null;
    }

    return (
        <button className="logout-btn" onClick={handleLogout} title="Logout">
            <LogoutIcon />
        </button>
    );
}
