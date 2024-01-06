import { useState, useEffect } from 'react';
import { Theme } from '@customTypes/Theme';

export interface ThemeHook {
    themeClass: string;
    toggle: () => void;
}

export default function useTheme(): ThemeHook {
    const storageTheme = localStorage.getItem('theme');
    const [themeClass, setThemeClass] = useState(storageTheme ? storageTheme : Theme.LIGHT);

    useEffect(() => {
        document.body.classList.value = '';
        document.body.classList.add(themeClass);
        localStorage.setItem('theme', themeClass);
    }, [themeClass]);

    const toggle = () => setThemeClass(themeClass === Theme.LIGHT ? Theme.DARK : Theme.LIGHT);

    return { themeClass, toggle };
}
