import './LocaleButton.scss';
import { Locale } from '@customTypes/Locale';
import { LocaleContext, useLocaleContext } from '@contexts/LocaleContext';

export default function LocaleButton() {
    const { locale, toggle }: LocaleContext = useLocaleContext();

    return (
        <button className="locale-btn" onClick={toggle}>
            <span className={`locale-btn__item ${locale === Locale.ENGLISH ? 'locale-btn__item--active' : ''}`}>{Locale.ENGLISH}</span>
            <span>/</span>
            <span className={`locale-btn__item ${locale === Locale.POLISH ? 'locale-btn__item--active' : ''}`}>{Locale.POLISH}</span>
        </button>
    );
}
