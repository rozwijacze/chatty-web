import { useAuth } from '../../contexts/AuthContext';
import { ReactComponent as LogoutIcon } from '/src/assets/logout.svg';
import './LogoutButton.scss';

export default function LogoutButton() {
    const { logout } = useAuth();

    return (
        <button className="logout-btn" onClick={() => logout()} title="Logout">
            <LogoutIcon />
        </button>
    );
}
