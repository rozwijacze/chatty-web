import { useContext } from 'react';
import './LocaleButton.scss';
import { Locale } from '../../types/Locale';
import { LocaleContext } from '../../contexts/LocaleContext';

export default function LocaleButton() {
    const locale = useContext(LocaleContext);

    // TODO
    // Create some general error helper/service
    if (locale === undefined) {
        throw Error('Component that uses LocaleContext is not wrapped by a provider.');
    }

    return (
        <button className="locale-btn" onClick={locale.toggle}>
            <span className={`locale-btn__item ${locale.currentLocale === Locale.ENGLISH ? 'locale-btn__item--active' : ''}`}>
                {Locale.ENGLISH}
            </span>
            <span>/</span>
            <span className={`locale-btn__item ${locale.currentLocale === Locale.POLISH ? 'locale-btn__item--active' : ''}`}>
                {Locale.POLISH}
            </span>
        </button>
    );
}
