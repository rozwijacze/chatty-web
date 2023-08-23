import { createContext, useState } from 'react';

export const ThemeContext = createContext<any>({ theme: 'light', undefined });

export const ThemeProvider: React.FC<any> = ({ children }) => {
    const [theme, setTheme] = useState('light');

    const toggleMode = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    }
    return <ThemeContext.Provider value={{ theme, setTheme, toggleMode }}>{children}</ThemeContext.Provider>;
};
