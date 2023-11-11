import { createContext, useState } from 'react';
import { Locale } from '../types/Locale';

interface LocaleContext {
    currentLocale: Locale;
    toggle: () => void;
}

export const LocaleContext = createContext<LocaleContext | undefined>(undefined);

// TODO
// Saving currentLocale to a cookie
export default function LocaleContextProvider({ children }: React.PropsWithChildren) {
    const [currentLocale, setCurrentLocale] = useState(Locale.ENGLISH);

    function toggle() {
        setCurrentLocale(currentLocale === Locale.ENGLISH ? Locale.POLISH : Locale.ENGLISH);
    }

    return <LocaleContext.Provider value={{ currentLocale, toggle }}>{children}</LocaleContext.Provider>;
}
