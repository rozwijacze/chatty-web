import { useState, useEffect } from 'react';
import Theme from '@customTypes/Theme';

export default function useTheme() {
    const storageTheme = localStorage.getItem('theme');
    const [themeClass, setThemeClass] = useState(storageTheme ? storageTheme : Theme.LIGHT);

    useEffect(() => {
        document.body.classList.value = '';
        document.body.classList.add(themeClass);
        localStorage.setItem('theme', themeClass);
    }, [themeClass]);

    const toggleTheme = () => setThemeClass(themeClass === Theme.LIGHT ? Theme.DARK : Theme.LIGHT);

    return { themeClass, toggleTheme };
}
