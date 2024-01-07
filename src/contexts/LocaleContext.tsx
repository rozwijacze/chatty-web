import { createContext, useEffect, useState } from 'react';
import { Locale } from '@customTypes/Locale';
import { useContextHook } from '@hooks/useContextHook';

export interface LocaleContext {
    locale: string;
    toggle: () => void;
}

const LocaleContext = createContext<LocaleContext | null>(null);
// eslint-disable-next-line react-refresh/only-export-components
export const useLocaleContext = () => useContextHook(LocaleContext);

export default function LocaleContextProvider({ children }: React.PropsWithChildren) {
    const storageLocale = localStorage.getItem('locale');
    const [locale, setLocale] = useState(storageLocale ? storageLocale : Locale.ENGLISH);

    useEffect(() => localStorage.setItem('locale', locale), [locale]);

    const toggle = () => setLocale(locale === Locale.ENGLISH ? Locale.POLISH : Locale.ENGLISH);

    return <LocaleContext.Provider value={{ locale, toggle }}>{children}</LocaleContext.Provider>;
}
