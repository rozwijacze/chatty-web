import { Message } from '../../../types/Message';
import contactsData from '../Contacts/data';

const data: Message[] = [
    {
        id: 1,
        contact: contactsData[0],
        date_of_send: new Date(99, 5, 24),
        date_of_receive: new Date(99, 5, 24),
        content: 'Hello there, how are you doing ?'
    },
    {
        id: 2,
        contact: contactsData[2],
        date_of_send: new Date(99, 1, 12),
        date_of_receive: new Date(99, 1, 12),
        content: 'Hey, I have got a surprise for you.'
    },
    {
        id: 3,
        contact: contactsData[1],
        date_of_send: new Date(99, 9, 16),
        date_of_receive: new Date(99, 9, 16),
        content: 'Why dont you answer my calls...'
    },
    {
        id: 4,
        contact: contactsData[3],
        date_of_send: new Date(99, 4, 11),
        date_of_receive: new Date(99, 4, 11),
        content: 'I have chicken bucket for you'
    }
];

export default data;
