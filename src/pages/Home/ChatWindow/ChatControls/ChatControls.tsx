import { useState } from 'react';
import './ChatControls.scss';
import ButtonItem from '@components/common/ButtonItem/ButtonItem';
import { ReactComponent as SendMessageIcon } from '@assets/send-message.svg';
import { useLabels } from '@hooks/useLabels';

export default function ChatControls() {
    const labels = useLabels();
    const [messageValue, setMessageValue] = useState('');

    const handleInputChange = (event: React.FormEvent<HTMLInputElement>) => setMessageValue(event.currentTarget.value);
    const handleMessageSend = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (messageValue) {
            sendMessage(messageValue);
        }
    };

    // TODO: Send message through websocket and display on current chatroom.
    function sendMessage(message: string) {
        console.log(message);
    }

    return (
        <form className="chat-controls" onSubmit={event => handleMessageSend(event)}>
            <input type="text" placeholder={labels.chatControls.inputPlaceholder} value={messageValue} onChange={handleInputChange} />
            <ButtonItem
                children={<SendMessageIcon />}
                title={labels.chatControls.buttonTitle}
                modificators={['chatcontrol']}
                type="submit"
            />
        </form>
    );
}
