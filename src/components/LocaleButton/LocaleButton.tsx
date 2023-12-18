import './LocaleButton.scss';
import { Locale } from '../../types/Locale';
import { LocaleContext, useLocaleContext } from '../../contexts/LocaleContext';

export default function LocaleButton() {
    const { currentLocale, toggle }: LocaleContext = useLocaleContext();

    return (
        <button className="locale-btn" onClick={toggle}>
            <span className={`locale-btn__item ${currentLocale === Locale.ENGLISH ? 'locale-btn__item--active' : ''}`}>
                {Locale.ENGLISH}
            </span>
            <span>/</span>
            <span className={`locale-btn__item ${currentLocale === Locale.POLISH ? 'locale-btn__item--active' : ''}`}>{Locale.POLISH}</span>
        </button>
    );
}
