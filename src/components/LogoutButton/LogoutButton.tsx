import { useAuth } from '../../contexts/AuthContext';
import { isUserLoggedIn } from '../../utils/utils';

export default function ThemeButton() {
    const { logout } = useAuth();
    function handleLogout() {
        isUserLoggedIn() ? logout() : null;
    }

    return (
        <button className="button" onClick={handleLogout}>
            Logout
        </button>
    );
}
