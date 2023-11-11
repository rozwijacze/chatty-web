import { useLabels } from '../../../hooks/useLabels';
import './SideContacts.scss';

export default function SideContacts() {
    const labels = useLabels();

    return (
        <div className="side-contacts">
            <h2 className="side-contacts__title">{labels.sideContacts.title}</h2>
        </div>
    );
}
