import data from '../../../data/mocks/Contacts/data';
import { Contact } from '../../../types/Contact';
import OptionsList from '../../OptionsList/OptionsList';
import { ViewType } from '../../../types/ViewType';
import { ChatContext, useChatContext } from '../../../contexts/ChatContext';

export default function Contacts() {
    const { handleChatSelect }: ChatContext = useChatContext();

    return (
        <>
            {data.map((contact: Contact) => {
                const username = contact.name + ' ' + contact.surname;
                const statusModifierClass = contact.online ? 'side-window-item__status--online' : '';

                return (
                    <li key={contact.id} className="side-window-item side-window-item--contact" title={username}>
                        <div className="side-window-item__wrapper" onClick={() => handleChatSelect(contact)}>
                            <div className="side-window-item__profile">
                                <img src={contact.img_src} alt="profile image" />
                                <div className={`side-window-item__status ${statusModifierClass}`}></div>
                            </div>
                            <p className="side-window-item__username">{username}</p>
                        </div>

                        <OptionsList view={ViewType.CONTACTS} />
                    </li>
                );
            })}
        </>
    );
}
