import { useState } from 'react';
import { ReactComponent as SendMessageIcon } from '@assets/send-message.svg';
import './ChatControls.scss';
import ButtonItem from '@components/common/ButtonItem/ButtonItem';
import useLabels from '@hooks/useLabels';
import useWebSocket from 'react-use-websocket';
import { getToken } from '@utils/utils';
import ViteEnv from '@customTypes/ViteEnv';

const MESSAGE_API_URL: ViteEnv['VITE_MESSAGE_API_URL'] = import.meta.env.VITE_MESSAGE_API_URL;

export default function ChatControls() {
    const labels = useLabels();

    const { sendMessage } = useWebSocket(MESSAGE_API_URL + '/api/connect', {
        queryParams: { token: getToken() }
    });

    const [messageValue, setMessageValue] = useState('');
    const handleInputChange = (event: React.FormEvent<HTMLInputElement>) => setMessageValue(event.currentTarget.value);
    const handleMessageSend = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (messageValue) {
            sendMessage(messageValue);
        }
    };

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
