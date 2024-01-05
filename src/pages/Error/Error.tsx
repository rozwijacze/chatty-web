import Labels from '@data/translations/Labels';
import { useLabels } from '@hooks/useLabels';

export default function Error() {
    const labels: Labels = useLabels();

    return <main>{labels.error.title}</main>;
}
