import { useEffect, useState } from 'react';
import labels_EN from '@data/translations/Labels_EN';
import labels_PL from '@data/translations/Labels_PL';
import Locale from '@customTypes/Locale';
import { useAppSelector } from '@redux/hooks';

// custom hook for using labels based on currently selected locale
export default function useLabels() {
    const locale = useAppSelector(state => state.locale.value);
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
