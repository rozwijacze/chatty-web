import useLabels from '@hooks/useLabels';

export default function Error() {
    const labels = useLabels();

    return <main>{labels.errors.page.title}</main>;
}
