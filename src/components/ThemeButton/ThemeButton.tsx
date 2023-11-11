import useTheme from '../../hooks/useTheme';
import './ThemeButton.scss';

export default function ThemeButton() {
    const { toggle } = useTheme();

    return <button className="theme-btn" title="Toggle theme" onClick={() => toggle()}></button>;
}
