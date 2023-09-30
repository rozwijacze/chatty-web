import { useTheme } from '../../hooks/useTheme';
import './ThemeButton.scss';

export const ThemeButton = () => {
    const { toggle } = useTheme();

    return <button className="theme-btn" title="Toggle theme" onClick={() => toggle()}></button>;
};
