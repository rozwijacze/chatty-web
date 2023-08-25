import { useTheme } from '../../hooks/useTheme';
import './ThemeButton.scss';

export const ThemeButton = () => {
    const { toggle } = useTheme();

    return <button className="theme-btn" onClick={() => toggle()}></button>;
};
