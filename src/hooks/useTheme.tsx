import { useState } from 'react';

interface ThemeHook {
    mode: string;
    toggle: () => void;
}

export const useTheme = (): ThemeHook => {
    const [mode, setMode] = useState('light');

    const toggle = () => {
        setMode(mode === 'light' ? 'dark' : 'light');
    };

    return { mode, toggle };
};
