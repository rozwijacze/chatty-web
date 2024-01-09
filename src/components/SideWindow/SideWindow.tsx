import Conversations from './Conversations/Conversations';
import Contacts from './Contacts/Contacts';
import Settings from './Settings/Settings';
import './SideWindow.scss';
import { ViewType } from '@customTypes/ViewType';
import { useLabels } from '@hooks/useLabels';
import { useState } from 'react';
import Searchbar from '@components/Searchbar/Searchbar';
import { valueFoundInKey } from '@helpers/SearchHelper';
import conversationsData from '@data/mocks/conversationsData';
import contactsData from '@data/mocks/contactsData';

interface Props {
    view: ViewType;
}

export default function SideWindow({ view }: Props) {
    const labels = useLabels();
    const [searchedValue, setSearchedValue] = useState('');

    let viewElement: JSX.Element;
    let title = '';
    let showSearchbar = true;

    switch (view) {
        default:
            viewElement = (
                <Conversations data={conversationsData.filter(conversation => valueFoundInKey(searchedValue, conversation.name))} />
            );
            title = labels.sideConversations.title;
            break;

        case ViewType.CONTACTS:
            viewElement = (
                <Contacts data={contactsData.filter(contact => valueFoundInKey(searchedValue, contact.name + ' ' + contact.surname))} />
            );
            title = labels.sideContacts.title;
            break;

        case ViewType.SETTINGS:
            viewElement = <Settings />;
            title = labels.sideSettings.title;
            showSearchbar = false;
            break;
    }

    return (
        <div className="side-window">
            <h2 className="side-window__title">{title}</h2>
            <div className="side-window__content">
                {showSearchbar && <Searchbar searchedValue={searchedValue} setSearchedValue={setSearchedValue} />}
                {viewElement}
            </div>
        </div>
    );
}
