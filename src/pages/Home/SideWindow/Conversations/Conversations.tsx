import OptionsList from '@components/common/OptionsList/OptionsList';
import ViewType from '@customTypes/ViewType';
import Conversation from '@customTypes/Conversation';
import { useConversationContext } from '@contexts/ConversationContext';

interface Props {
    data: Conversation[];
}

export default function Conversations({ data }: Props) {
    const { handleConversationSelect } = useConversationContext();

    return (
        <ul className="side-window-list">
            {data.map(conversation => {
                const conversationName = conversation.name;
                const lastMessage = conversation.lastMessage?.contact.name + ': ' + conversation.lastMessage?.content;

                let statusModifierClass = '';
                conversation.users.forEach(user => {
                    if (user.online) {
                        return (statusModifierClass = 'side-window-item__status--online');
                    }
                });

                return (
                    <li key={conversation.id} className="side-window-item" title={conversationName}>
                        <div className="side-window-item__wrapper" onClick={() => handleConversationSelect(conversation)}>
                            <div className="side-window-item__profile">
                                <img src={conversation.img} alt="profile image" />
                                <div className={`side-window-item__status ${statusModifierClass}`}></div>
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
