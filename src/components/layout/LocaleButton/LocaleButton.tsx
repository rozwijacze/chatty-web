import Locale from '@customTypes/Locale';
import ButtonItem from '@components/common/ButtonItem/ButtonItem';
import useLabels from '@hooks/useLabels';
import { toggleLocale } from '@redux/slices/localeSlice';
import { useAppDispatch, useAppSelector } from '@redux/hooks';

export default function LocaleButton() {
    const labels = useLabels();
    const locale = useAppSelector(state => state.locale.value);
    const dispatch = useAppDispatch();

    return (
        <ButtonItem clickHandler={() => dispatch(toggleLocale())} title={labels.buttons.locale} modificators={['locale']}>
            <span className={`locale ${locale === Locale.ENGLISH ? 'locale--active' : ''}`}>{Locale.ENGLISH}</span>
            <span>/</span>
            <span className={`locale ${locale === Locale.POLISH ? 'locale--active' : ''}`}>{Locale.POLISH}</span>
        </ButtonItem>
    );
}
