import data from '@data/mocks/Contacts/data';
import { Contact } from '@customTypes/Contact';
import OptionsList from '@components/OptionsList/OptionsList';
import { ViewType } from '@customTypes/ViewType';
import Searchbar from '@components/SideWindow/Searchbar/Searchbar';
import { useState } from 'react';

export default function Contacts() {
    const [searchInputVal, setSearchInputVal] = useState('');

    // TODO: Should create chatroom with that user if it doesnt exits.
    // const { handleChatSelect }: ChatContext = useChatContext();

    const filteredContactData = data.filter(contact => {
        const username = contact.name + ' ' + contact.surname;

        if (username.toLowerCase().includes(searchInputVal.toLowerCase())) return contact;
    });

    return (
        <>
            <Searchbar inputVal={searchInputVal} setInputVal={setSearchInputVal} />
            <ul className="side-window-list">
                {filteredContactData.map((contact: Contact) => {
                    const username = contact.name + ' ' + contact.surname;
                    const statusModifierClass = contact.online ? 'side-window-item__status--online' : '';

                    return (
                        <li key={contact.id} className="side-window-item side-window-item--contact" title={username}>
                            <div className="side-window-item__wrapper" onClick={() => {}}>
                                <div className="side-window-item__profile">
                                    <img src={contact.img_src} alt="profile image" />
                                    <div className={`side-window-item__status ${statusModifierClass}`}></div>
                                </div>
                                <p className="side-window-item__username">{username}</p>
                            </div>

                            <OptionsList view={ViewType.CONTACTS} />
                        </li>
                    );
                })}
            </ul>
        </>
    );
}
