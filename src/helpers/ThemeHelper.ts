import Theme from '@customTypes/Theme';

export function setThemeOnBody() {
    const storageTheme = localStorage.getItem('theme');
    const themeClass = storageTheme ? storageTheme : Theme.LIGHT;

    document.body.classList.value = '';
    document.body.classList.add(themeClass);
}

export function toggleTheme() {
    const storageTheme = localStorage.getItem('theme');
    let themeClass;

    switch (storageTheme) {
        case Theme.DARK:
            themeClass = Theme.LIGHT;
            break;
        default:
            themeClass = Theme.DARK;
            break;
    }

    localStorage.setItem('theme', String(themeClass));
    setThemeOnBody();
}
