import { useState, useEffect } from 'react';

interface ThemeHook {
    mode: string;
    toggle: () => void;
}

export const useTheme = (): ThemeHook => {
    const [mode, setMode] = useState('light');

    useEffect(() => {
        document.body.classList.value = "";
        document.body.classList.add(mode);
    }, [mode])
    
    const toggle = () => {
        setMode(mode === 'light' ? 'dark' : 'light');
    };

    return { mode, toggle };
};
