import OptionsList from '@components/common/OptionsList/OptionsList';
import { ViewType } from '@customTypes/ViewType';
import { ConversationContext, useConversationContext } from '@contexts/ConversationContext';
import { Conversation } from '@customTypes/Conversation';

interface Props {
    data: Conversation[];
}

export default function Conversations({ data }: Props) {
    const { handleConversationSelect }: ConversationContext = useConversationContext();

    return (
        <ul className="side-window-list">
            {data.map((conversation: Conversation) => {
                const conversationName = conversation.name;
                const lastMessage = conversation.lastMessage?.contact.name + ': ' + conversation.lastMessage?.content;
                // TODO: should we show status in conversation list?
                // const statusModifierClass = conversation.contact.online ? 'side-window-item__status--online' : '';

                return (
                    <li key={conversation.id} className="side-window-item" title={conversationName}>
                        <div className="side-window-item__wrapper" onClick={() => handleConversationSelect(conversation)}>
                            <div className="side-window-item__profile">
                                <img src={conversation.img} alt="profile image" />
                                {/* <div className={`side-window-item__status ${statusModifierClass}`}></div> */}
                            </div>
                            <div className="side-window-item__content">
                                <p>{conversationName}</p>
                                <span>{lastMessage}</span>
                            </div>
                        </div>

                        <OptionsList view={ViewType.CONVERSATIONS} />
                    </li>
                );
            })}
        </ul>
    );
}
