import './Messages.scss';
import { useConversationContext } from '@contexts/ConversationContext';

export default function Messages() {
    const { selectedConversation } = useConversationContext();

    return (
        <ul className="messages">
            {selectedConversation?.page.messages.map(message => {
                // TODO: change mocked current user id to current user id
                const isReceived = message.contact.id !== 3;

                return (
                    <li key={message.id} className={`messages-item ${isReceived ? 'messages-item--received' : ''}`}>
                        <img src={message.contact.img} alt="profile image" />
                        <div className="messages-item__wrapper">
                            <p className="messages-item__author">{message.contact.name}</p>
                            <p className="messages-item__content">{message.content}</p>
                        </div>
                    </li>
                );
            })}
        </ul>
    );
}
