import { createContext, useState } from 'react';
import { Locale } from '../types/Locale';
import { useContextHook } from '../helpers/ContextHelper';

export interface LocaleContext {
    currentLocale: Locale;
    toggle: () => void;
}

const LocaleContext = createContext<LocaleContext | null>(null);
// eslint-disable-next-line react-refresh/only-export-components
export const useLocaleContext = () => useContextHook(LocaleContext);

// TODO
// Saving currentLocale to a cookie
export default function LocaleContextProvider({ children }: React.PropsWithChildren) {
    const [currentLocale, setCurrentLocale] = useState(Locale.ENGLISH);
    const toggle = () => setCurrentLocale(currentLocale === Locale.ENGLISH ? Locale.POLISH : Locale.ENGLISH);

    return <LocaleContext.Provider value={{ currentLocale, toggle }}>{children}</LocaleContext.Provider>;
}
