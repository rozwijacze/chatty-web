import { Message } from '@customTypes/Message';
import contactsData from './contactsData';

const messagesData: Message[] = [
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
        contact: contactsData[2],
        date_of_send: new Date(99, 4, 11),
        date_of_receive: new Date(99, 4, 11),
        content: 'I have chicken bucket for you'
    },
    {
        id: 5,
        contact: contactsData[0],
        date_of_send: new Date('1995-12-17T03:24:00'),
        date_of_receive: new Date(99, 5, 24),
        content: 'Send me by paczkomat plis'
    },
    {
        id: 6,
        contact: contactsData[1],
        date_of_send: new Date('1995-12-17T03:24:30'),
        date_of_receive: new Date(99, 5, 24),
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    },
    {
        id: 7,
        contact: contactsData[2],
        date_of_send: new Date('1995-12-17T03:25:30'),
        date_of_receive: new Date(99, 5, 24),
        content: 'HOLA AMIGOS SRY CAPSLOCK'
    },
    {
        id: 8,
        contact: contactsData[0],
        date_of_send: new Date('1995-12-17T03:26:30'),
        date_of_receive: new Date(99, 5, 24),
        content: 'Great, we hang today?'
    },
    {
        id: 9,
        contact: contactsData[0],
        date_of_send: new Date('1995-12-17T03:26:33'),
        date_of_receive: new Date(99, 5, 24),
        content: 'I have some ideas for it'
    }
];

export default messagesData;
