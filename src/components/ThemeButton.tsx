import { useTheme } from '../hooks/useTheme';

export const ThemeButton = () => {
    const { toggle } = useTheme();

    return <button onClick={() => toggle()}>Toggle theme</button>;
};
