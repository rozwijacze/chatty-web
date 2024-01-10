import Locale from '@customTypes/Locale';
import { useLocaleContext } from '@contexts/LocaleContext';

export default function LocaleButton() {
    const { locale } = useLocaleContext();

    return (
        <>
            <span className={`locale ${locale === Locale.ENGLISH ? 'locale--active' : ''}`}>{Locale.ENGLISH}</span>
            <span>/</span>
            <span className={`locale ${locale === Locale.POLISH ? 'locale--active' : ''}`}>{Locale.POLISH}</span>
        </>
    );
}
