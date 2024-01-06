import data from '@data/mocks/Messages/data';
import { Message } from '@customTypes/Message';
import OptionsList from '@components/OptionsList/OptionsList';
import { ViewType } from '@customTypes/ViewType';
import { ChatContext, useChatContext } from '@contexts/ChatContext';
import Searchbar from '@components/SideWindow/Searchbar/Searchbar';
import { useState } from 'react';

export default function Messages() {
    const [searchInputVal, setSearchInputVal] = useState('');
    const { handleChatSelect }: ChatContext = useChatContext();

    const filteredMessagesData = data.filter(message => {
        const username = message.contact.name + ' ' + message.contact.surname;

        if (username.toLowerCase().includes(searchInputVal.toLowerCase())) return message;
    });

    return (
        <>
            <Searchbar inputVal={searchInputVal} setInputVal={setSearchInputVal} />
            <ul className="side-window-list">
                {filteredMessagesData.map((message: Message) => {
                    const username = message.contact.name + ' ' + message.contact.surname;
                    const statusModifierClass = message.contact.online ? 'side-window-item__status--online' : '';

                    return (
                        <li key={message.id} className="side-window-item" title={username}>
                            <div className="side-window-item__wrapper" onClick={() => handleChatSelect(message.contact)}>
                                <div className="side-window-item__profile">
                                    <img src={message.contact.img_src} alt="profile image" />
                                    <div className={`side-window-item__status ${statusModifierClass}`}></div>
                                </div>
                                <div className="side-window-item__content">
                                    <p>{username}</p>
                                    <span>{message.content}</span>
                                </div>
                            </div>

                            <OptionsList view={ViewType.MESSAGES} />
                        </li>
                    );
                })}
            </ul>
        </>
    );
}
