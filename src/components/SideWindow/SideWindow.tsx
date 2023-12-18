import Messages from './Messages/Messages';
import Contacts from './Contacts/Contacts';
import Settings from './Settings/Settings';
import './SideWindow.scss';
import { ViewType } from '../../types/ViewType';
import { useLabels } from '../../hooks/useLabels';

interface Props {
    view: ViewType;
}

export default function SideWindow({ view }: Props) {
    const labels = useLabels();
    let elements: JSX.Element;
    let title = '';

    switch (view) {
        default:
            elements = <Messages />;
            title = labels.sideMessages.title;
            break;

        case ViewType.CONTACTS:
            elements = <Contacts />;
            title = labels.sideContacts.title;
            break;

        case ViewType.SETTINGS:
            elements = <Settings />;
            title = labels.sideSettings.title;
            break;
    }

    return (
        <div className="side-window">
            <h2 className="side-window__title">{title}</h2>
            <ul className="side-window__list">{elements}</ul>
        </div>
    );
}
