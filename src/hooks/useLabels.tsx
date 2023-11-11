import { useContext, useEffect, useState } from 'react';
import { LocaleContext } from '../contexts/LocaleContext';
import { labels_EN } from '../data/translations/Labels_EN';
import { labels_PL } from '../data/translations/Labels_PL';
import { Locale } from '../types/Locale';

// custom hook for using labels based on currently selected locale
export function useLabels() {
    const locale = useContext(LocaleContext);

    // TODO
    // Create some general error helper/service
    if (locale === undefined) {
        throw Error('Component that uses LocaleContext is not wrapped by a provider.');
    }

    const [labels, setLabels] = useState(labels_EN);

    useEffect(() => {
        switch (locale.currentLocale) {
            case Locale.POLISH:
                setLabels(labels_PL);
                break;
            default:
                setLabels(labels_EN);
                break;
        }
    }, [locale.currentLocale]);

    return labels;
}
