import { SideMessages } from './SideMessages/SideMessages';
import { SideContacts } from './SideContacts/SideContacts';
import { SideSettings } from './SideSettings/SideSettings';
import './SideWindow.scss';
import { ViewType } from '../../types/ViewType';

interface Props {
    view: ViewType.MESSAGES | ViewType.CONTACTS | ViewType.SETTINGS;
}

export const SideWindow = (props: Props) => {
    let viewEl: JSX.Element;

    switch (props.view) {
        case ViewType.CONTACTS:
            viewEl = <SideContacts />;
            break;

        case ViewType.SETTINGS:
            viewEl = <SideSettings />;
            break;

        default:
            viewEl = <SideMessages />;
            break;
    }

    return <div className="side-window">{viewEl}</div>;
};
