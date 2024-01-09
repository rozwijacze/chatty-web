import { ConversationPage } from '@customTypes/ConversationPage';
import contactsData from './contactsData';

const conversationPagesData: ConversationPage[] = [
    {
        guid: 1,
        messages: [
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
                contact: contactsData[2],
                date_of_send: new Date(99, 4, 11),
                date_of_receive: new Date(99, 4, 11),
                content: 'Nah man, I have orlen paczka close to my house.'
            },
            {
                id: 7,
                contact: contactsData[2],
                date_of_send: new Date(99, 4, 11),
                date_of_receive: new Date(99, 4, 11),
                content: 'I can send those czikens to you tommorow morning.'
            },
            {
                id: 8,
                contact: contactsData[1],
                date_of_send: new Date(99, 4, 11),
                date_of_receive: new Date(99, 4, 11),
                content: 'Please give me also some skrzydełkas'
            },
            {
                id: 9,
                contact: contactsData[1],
                date_of_send: new Date(99, 4, 11),
                date_of_receive: new Date(99, 4, 11),
                content: 'I can pay you more money than Jeff has in his wallet'
            },
            {
                id: 10,
                contact: contactsData[0],
                date_of_send: new Date(99, 4, 11),
                date_of_receive: new Date(99, 4, 11),
                content: 'Are you crazy Karolajn stfu.?'
            },
            {
                id: 11,
                contact: contactsData[2],
                date_of_send: new Date(99, 4, 11),
                date_of_receive: new Date(99, 4, 11),
                content: 'I will eat them by myself you fools.'
            },
            {
                id: 12,
                contact: contactsData[2],
                date_of_send: new Date(99, 4, 11),
                date_of_receive: new Date(99, 4, 11),
                content: 'No one will taste my chickenas hehehe.'
            }
        ]
    },
    {
        guid: 2,
        messages: [
            {
                id: 1,
                contact: contactsData[2],
                date_of_send: new Date(99, 4, 11),
                date_of_receive: new Date(99, 4, 11),
                content: 'hehehe hello gajs'
            },
            {
                id: 2,
                contact: contactsData[1],
                date_of_send: new Date('1995-12-17T03:24:00'),
                date_of_receive: new Date(99, 5, 24),
                content: 'Hiho'
            },
            {
                id: 3,
                contact: contactsData[1],
                date_of_send: new Date('1995-12-17T03:24:00'),
                date_of_receive: new Date(99, 5, 24),
                content: 'Are you a famous Rafonix tibian citizen ?'
            },
            {
                id: 4,
                contact: contactsData[3],
                date_of_send: new Date('1995-12-17T03:24:00'),
                date_of_receive: new Date(99, 5, 24),
                content: 'Co tu sie robi many? HAlo'
            }
        ]
    },
    {
        guid: 3,
        messages: [
            {
                id: 1,
                contact: contactsData[1],
                date_of_send: new Date('1995-12-17T03:24:30'),
                date_of_receive: new Date(99, 5, 24),
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
            },
            {
                id: 2,
                contact: contactsData[2],
                date_of_send: new Date('1995-12-17T03:25:30'),
                date_of_receive: new Date(99, 5, 24),
                content: 'HOLA AMIGOS SRY CAPSLOCK'
            },
            {
                id: 3,
                contact: contactsData[0],
                date_of_send: new Date('1995-12-17T03:26:30'),
                date_of_receive: new Date(99, 5, 24),
                content: 'Great, we hang today?'
            }
        ]
    }
];

export default conversationPagesData;
