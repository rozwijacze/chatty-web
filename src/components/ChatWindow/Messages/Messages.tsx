import './Messages.scss';
import { ChatContext, useChatContext } from '@contexts/ChatContext';

export default function Messages() {
    const { selectedChat }: ChatContext = useChatContext();

    return (
        <ul className="messages">
            {selectedChat?.conversationPage.messages.map(message => {
                // TODO: change mocked current user id to current user id
                const isReceived = message.contact.id !== 1;
                return (
                    <li key={message.id} className={`messages-item ${isReceived ? 'messages-item--received' : ''}`}>
                        <img src={message.contact.img_src} alt="profile image" />
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
