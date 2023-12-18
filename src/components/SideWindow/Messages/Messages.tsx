import data from '../../../data/mocks/Messages/data';
import { Message } from '../../../types/Message';
import OptionsList from '../../OptionsList/OptionsList';
import { ViewType } from '../../../types/ViewType';
import { ChatContext, useChatContext } from '../../../contexts/ChatContext';

export default function Messages() {
    const { handleChatSelect }: ChatContext = useChatContext();

    return (
        <>
            {data.map((message: Message) => {
                const username = message.contact.name + ' ' + message.contact.surname;
                const statusModifierClass = message.contact.online ? 'side-window-item__status--online' : '';

                return (
                    <li key={message.id} className="side-window-item" title={username}>
                        <div className="side-window-item__wrapper" onClick={() => handleChatSelect(message.contact)}>
                            <div className="side-window-item__profile">
                                <img src={message.contact.img_src} alt="profile image" />
                                <div className={`side-window-item__status ${statusModifierClass}`}></div>
                            </div>
                            <div className="side-window-item__content">
                                <p>{username}</p>
                                <span>{message.content}</span>
                            </div>
                        </div>

                        <OptionsList view={ViewType.MESSAGES} />
                    </li>
                );
            })}
        </>
    );
}
