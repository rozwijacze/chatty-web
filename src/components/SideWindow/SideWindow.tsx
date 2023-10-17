import { SideMessages } from './SideMessages/SideMessages';
import { SideContacts } from './SideContacts/SideContacts';
import { SideSettings } from './SideSettings/SideSettings';
import './SideWindow.scss';
import { ViewType } from '../../types/ViewType';

interface Props {
    view: ViewType;
}

export const SideWindow = ({ view }: Props) => {
    let viewType;

    switch (view) {
        case ViewType.MESSAGES:
            viewType = <SideMessages />;
            break;

        case ViewType.CONTACTS:
            viewType = <SideContacts />;
            break;

        case ViewType.SETTINGS:
            viewType = <SideSettings />;
            break;
    }

    return <div className="side-window">{viewType}</div>;
};
