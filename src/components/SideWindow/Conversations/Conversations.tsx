import OptionsList from '@components/OptionsList/OptionsList';
import { ViewType } from '@customTypes/ViewType';
import { ChatContext, useChatContext } from '@contexts/ChatContext';
import Searchbar from '../Searchbar/Searchbar';
import { useState } from 'react';
import { Conversation } from '@customTypes/Conversation';
import conversationsData from '@data/mocks/Messages/conversationsData';

export default function Messages() {
    const [searchInputVal, setSearchInputVal] = useState('');
    const { handleChatSelect }: ChatContext = useChatContext();

    const filteredConversationsData = conversationsData.filter((conversation: Conversation) => {
        const conversationName = conversation.conversationName;

        if (conversationName.toLowerCase().includes(searchInputVal.toLowerCase())) return conversation;
    });

    return (
        <>
            <Searchbar inputVal={searchInputVal} setInputVal={setSearchInputVal} />
            <ul className="side-window-list">
                {filteredConversationsData.map((conversation: Conversation) => {
                    const username = conversation.conversationName;
                    // TODO: should we show status in conversation list?
                    // const statusModifierClass = conversation.contact.online ? 'side-window-item__status--online' : '';

                    return (
                        <li key={conversation.id} className="side-window-item" title={username}>
                            <div className="side-window-item__wrapper" onClick={() => handleChatSelect(conversation)}>
                                <div className="side-window-item__profile">
                                    <img src={conversation.conversationImg} alt="profile image" />
                                    {/* <div className={`side-window-item__status ${statusModifierClass}`}></div> */}
                                </div>
                                <div className="side-window-item__content">
                                    <p>{username}</p>
                                    <span>{conversation.lastMessage}</span>
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
