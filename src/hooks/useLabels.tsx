import { useEffect, useState } from 'react';
import { LocaleContext, useLocaleContext } from '../contexts/LocaleContext';
import { labels_EN } from '../data/translations/Labels_EN';
import { labels_PL } from '../data/translations/Labels_PL';
import { Locale } from '../types/Locale';
import Labels from '../data/translations/Labels';

// custom hook for using labels based on currently selected locale
export function useLabels(): Labels {
    const { locale }: LocaleContext = useLocaleContext();
    const [labels, setLabels] = useState<Labels>(labels_EN);

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
