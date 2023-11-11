import './ChatWindow.scss';
import { useLabels } from '../../hooks/useLabels';

export default function ChatWindow() {
    const labels = useLabels();

    return <div className="chat-window">{labels.chatWindow.title}</div>;
}
