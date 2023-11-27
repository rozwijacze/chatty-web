import { createContext, useContext, useState } from 'react';
import { Locale } from '../types/Locale';

interface LocaleContext {
    currentLocale: Locale;
    toggle: () => void;
}

export const LocaleContext = createContext<LocaleContext | null>(null);

// TODO
// Saving currentLocale to a cookie
export default function LocaleContextProvider({ children }: React.PropsWithChildren) {
    const [currentLocale, setCurrentLocale] = useState(Locale.ENGLISH);

    function toggle() {
        setCurrentLocale(currentLocale === Locale.ENGLISH ? Locale.POLISH : Locale.ENGLISH);
    }

    return <LocaleContext.Provider value={{ currentLocale, toggle }}>{children}</LocaleContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export function useLocaleContext() {
    const context = useContext(LocaleContext);

    if (!context) {
        throw Error('Component that uses LocaleContext is not wrapped by a provider.');
    }

    return context;
}
