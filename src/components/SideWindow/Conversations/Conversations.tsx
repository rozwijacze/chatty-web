import OptionsList from '@components/OptionsList/OptionsList';
import { ViewType } from '@customTypes/ViewType';
import { ChatContext, useChatContext } from '@contexts/ChatContext';
import { Conversation } from '@customTypes/Conversation';

interface Props {
    data: Conversation[];
}

export default function Conversations({ data }: Props) {
    const { handleChatSelect }: ChatContext = useChatContext();

    return (
        <ul className="side-window-list">
            {data.map((conversation: Conversation) => {
                const username = conversation.name;
                // TODO: should we show status in conversation list?
                // const statusModifierClass = conversation.contact.online ? 'side-window-item__status--online' : '';

                return (
                    <li key={conversation.id} className="side-window-item" title={username}>
                        <div className="side-window-item__wrapper" onClick={() => handleChatSelect(conversation)}>
                            <div className="side-window-item__profile">
                                <img src={conversation.img} alt="profile image" />
                                {/* <div className={`side-window-item__status ${statusModifierClass}`}></div> */}
                            </div>
                            <div className="side-window-item__content">
                                <p>{username}</p>
                                <span>{conversation.lastMessage}</span>
                            </div>
                        </div>

                        <OptionsList view={ViewType.CONVERSATIONS} />
                    </li>
                );
            })}
        </ul>
    );
}
