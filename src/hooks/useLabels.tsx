import { useEffect, useState } from 'react';
import { useLocaleContext } from '../contexts/LocaleContext';
import { labels_EN } from '../data/translations/Labels_EN';
import { labels_PL } from '../data/translations/Labels_PL';
import { Locale } from '../types/Locale';

// custom hook for using labels based on currently selected locale
export function useLabels() {
    const { currentLocale } = useLocaleContext();
    const [labels, setLabels] = useState(labels_EN);

    useEffect(() => {
        switch (currentLocale) {
            case Locale.POLISH:
                setLabels(labels_PL);
                break;
            default:
                setLabels(labels_EN);
                break;
        }
    }, [currentLocale]);

    return labels;
}
