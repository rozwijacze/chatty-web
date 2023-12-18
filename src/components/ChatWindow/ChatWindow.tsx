import './ChatWindow.scss';
import { ChatContext, useChatContext } from '../../contexts/ChatContext';
import { useLabels } from '../../hooks/useLabels';
import Labels from '../../data/translations/Labels';

export default function ChatWindow() {
    const labels: Labels = useLabels();
    const { selectedChat }: ChatContext = useChatContext();

    return (
        <div className="chat-window">
            <h2 className="chat-window__title">{selectedChat ? selectedChat.name : labels.chatWindow.title}</h2>
        </div>
    );
}
