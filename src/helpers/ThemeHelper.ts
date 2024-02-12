import Theme from '@customTypes/Theme';

export function setThemeOnBody() {
    const storageTheme: Theme | null = localStorage.getItem('theme') as Theme;
    const themeClass = storageTheme ? storageTheme : Theme.LIGHT;

    document.body.classList.value = '';
    document.body.classList.add(themeClass);
}

export function toggleTheme() {
    const storageTheme: Theme | null = localStorage.getItem('theme') as Theme;
    let themeClass: Theme;

    switch (storageTheme) {
        case Theme.DARK:
            themeClass = Theme.LIGHT;
            break;
        default:
            themeClass = Theme.DARK;
            break;
    }

    localStorage.setItem('theme', themeClass);
    setThemeOnBody();
}
