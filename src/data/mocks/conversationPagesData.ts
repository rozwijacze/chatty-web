import { ConversationPage } from '@customTypes/ConversationPage';
import contactsData from '@data/mocks/contactsData';

const conversationPagesData: ConversationPage[] = [
    {
        guid: 123,
        messages: [
            {
                id: 1,
                contact: contactsData[0],
                date_of_send: new Date('1995-12-17T03:24:00'),
                date_of_receive: new Date(99, 5, 24),
                content: 'Hello there, how are you doing?'
            },
            {
                id: 123123,
                contact: contactsData[1],
                date_of_send: new Date('1995-12-17T03:24:30'),
                date_of_receive: new Date(99, 5, 24),
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
            },
            {
                id: 1232323,
                contact: contactsData[2],
                date_of_send: new Date('1995-12-17T03:25:30'),
                date_of_receive: new Date(99, 5, 24),
                content: 'HOLA AMIGOS SRY CAPSLOCK'
            },
            {
                id: 1232323123,
                contact: contactsData[0],
                date_of_send: new Date('1995-12-17T03:26:30'),
                date_of_receive: new Date(99, 5, 24),
                content: 'Great, we hang today?'
            },
            {
                id: 321,
                contact: contactsData[0],
                date_of_send: new Date('1995-12-17T03:26:33'),
                date_of_receive: new Date(99, 5, 24),
                content: 'I have some ideas for it'
            }
        ]
    },
    {
        guid: 123123,
        messages: [
            {
                id: 32164876879,
                contact: contactsData[1],
                date_of_send: new Date('1995-12-17T03:24:00'),
                date_of_receive: new Date(99, 5, 24),
                content: 'remember about a present'
            },
            {
                id: 123123123123,
                contact: contactsData[0],
                date_of_send: new Date('1995-12-17T03:24:30'),
                date_of_receive: new Date(99, 5, 24),
                content: 'sure thing'
            }
        ]
    }
];

export default conversationPagesData;
