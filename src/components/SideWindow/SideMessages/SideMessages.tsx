import { useLabels } from '../../../hooks/useLabels';
import './SideMessages.scss';

export default function SideMessages() {
    const labels = useLabels();

    return (
        <div className="side-messages">
            <h2 className="side-messages__title">{labels.sideMessages.title}</h2>
        </div>
    );
}
