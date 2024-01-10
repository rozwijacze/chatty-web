import { useConversationContext } from '@contexts/ConversationContext';
import './ChatWindow.scss';
import useLabels from '@hooks/useLabels';
import ChatControls from './ChatControls/ChatControls';
import Messages from './Messages/Messages';

export default function ChatWindow() {
    const labels = useLabels();
    const { selectedConversation } = useConversationContext();

    return (
        <div className="chat-window">
            <h2 className="chat-window__title">{selectedConversation ? selectedConversation.name : labels.chatWindow.title}</h2>
            <div className="chat-window__content">
                <Messages />
                <ChatControls />
            </div>
        </div>
    );
}
