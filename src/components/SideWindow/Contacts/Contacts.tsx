import { Contact } from '@customTypes/Contact';
import OptionsList from '@components/OptionsList/OptionsList';
import { ViewType } from '@customTypes/ViewType';

interface Props {
    data: Contact[];
}

export default function Contacts({ data }: Props) {
    // TODO: Should create chatroom with that user if it doesnt exits.
    // const { handleConversationSelect }: ConversationContext = useConversationContext();

    return (
        <ul className="side-window-list">
            {data.map((contact: Contact) => {
                const username = contact.name + ' ' + contact.surname;
                const statusModifierClass = contact.online ? 'side-window-item__status--online' : '';

                return (
                    <li key={contact.id} className="side-window-item side-window-item--contact" title={username}>
                        <div className="side-window-item__wrapper" onClick={() => {}}>
                            <div className="side-window-item__profile">
                                <img src={contact.img} alt="profile image" />
                                <div className={`side-window-item__status ${statusModifierClass}`}></div>
                            </div>
                            <p className="side-window-item__username">{username}</p>
                        </div>

                        <OptionsList view={ViewType.CONTACTS} />
                    </li>
                );
            })}
        </ul>
    );
}
