import { useLabels } from '../../../hooks/useLabels';
import './SideContacts.scss';
import { data } from '../../../data/mocks/Contacts/data';
import { Contact } from '../../../types/Contact';
import OptionsList from '../../OptionsList/OptionsList';

export default function SideContacts() {
    const labels = useLabels();

    return (
        <div className="side-contacts">
            <h2 className="side-contacts__title">{labels.sideContacts.title}</h2>

            <ul className="side-contacts__list">
                {data.map((contact: Contact) => {
                    const username = contact.name + ' ' + contact.surname;
                    const statusModifierClass = contact.online ? 'side-contacts-item__status--online' : '';

                    return (
                        <li key={contact.id} className="side-contacts-item" title={username}>
                            <div className="side-contacts-item__profile">
                                <img src={contact.img_src} alt="profile image" />
                                <div className={`side-contacts-item__status ${statusModifierClass}`}></div>
                            </div>
                            <div className="side-contacts-item__content">
                                <p>{username}</p>
                                <span>{contact.description}</span>
                            </div>
                            <OptionsList />
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
