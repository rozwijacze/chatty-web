import { Conversation } from '@customTypes/Conversation';
import conversationPagesData from './conversationPagesData';
import contactsData from './contactsData';

const conversationsData: Conversation[] = [
    {
        id: 1,
        users: [contactsData[0], contactsData[3]],
        name: 'Makowce',
        img: '/src/data/mocks/images/Contact_1.jpg',
        page: conversationPagesData[0],
        lastMessage: conversationPagesData[0].messages[conversationPagesData[0].messages.length - 1]
    },
    {
        id: 2,
        users: [contactsData[2], contactsData[1]],
        name: 'Julki',
        img: '/src/data/mocks/images/Contact_3.jpg',
        page: conversationPagesData[1],
        lastMessage: conversationPagesData[1].messages[conversationPagesData[1].messages.length - 1]
    },
    {
        id: 3,
        users: [contactsData[3]],
        name: 'Andrzeje',
        img: '/src/data/mocks/images/Contact_2.jpg',
        page: conversationPagesData[2],
        lastMessage: conversationPagesData[2].messages[conversationPagesData[2].messages.length - 1]
    }
];

export default conversationsData;
