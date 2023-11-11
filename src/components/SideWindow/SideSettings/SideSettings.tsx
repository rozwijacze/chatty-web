import { useLabels } from '../../../hooks/useLabels';
import './SideSettings.scss';

export default function SideSettings() {
    const labels = useLabels();

    return (
        <div className="side-settings">
            <h2 className="side-settings__title">{labels.sideSettings.title}</h2>
        </div>
    );
}
