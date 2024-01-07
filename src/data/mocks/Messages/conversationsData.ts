import { Conversation } from '@customTypes/Conversation';
import conversationPageData from './conversationPageData';

const conversationsData: Conversation[] = [
    {
        id: 123123123,
        userIds: [1, 123, 1233],
        name: 'test conversation',
        img: '/src/data/mocks/Contacts/images/Contact_1.jpg',
        page: conversationPageData[0],
        lastMessage: 'testowa ostatnia wiadomosc'
    },
    {
        id: 123,
        userIds: [1, 123],
        name: 'conv2',
        img: '/src/data/mocks/Contacts/images/Contact_1.jpg',
        page: conversationPageData[1],
        lastMessage: 'elo'
    }
];

export default conversationsData;
