import { useEffect, useState } from 'react';
import { useLocaleContext } from '@contexts/LocaleContext';
import labels_EN from '@data/translations/Labels_EN';
import labels_PL from '@data/translations/Labels_PL';
import Locale from '@customTypes/Locale';

// custom hook for using labels based on currently selected locale
export default function useLabels() {
    const { locale } = useLocaleContext();
    const [labels, setLabels] = useState(locale === Locale.ENGLISH ? labels_EN : labels_PL);

    useEffect(() => {
        switch (locale) {
            case Locale.POLISH:
                setLabels(labels_PL);
                break;
            default:
                setLabels(labels_EN);
                break;
        }
    }, [locale]);

    return labels;
}
