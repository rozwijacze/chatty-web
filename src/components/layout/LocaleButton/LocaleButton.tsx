import Locale from '@customTypes/Locale';
import { useLocaleContext } from '@contexts/LocaleContext';
import ButtonItem from '@components/common/ButtonItem/ButtonItem';
import useLabels from '@hooks/useLabels';

export default function LocaleButton() {
    const labels = useLabels();
    const { locale, toggleLocale } = useLocaleContext();

    return (
        <ButtonItem clickHandler={toggleLocale} title={labels.buttons.locale} modificators={['locale']}>
            <span className={`locale ${locale === Locale.ENGLISH ? 'locale--active' : ''}`}>{Locale.ENGLISH}</span>
            <span>/</span>
            <span className={`locale ${locale === Locale.POLISH ? 'locale--active' : ''}`}>{Locale.POLISH}</span>
        </ButtonItem>
    );
}
