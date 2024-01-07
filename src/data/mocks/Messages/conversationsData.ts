import { Conversation } from '@customTypes/Conversation';
import conversationPageData from './conversationPageData';

const conversationsData: Conversation[] = [
    {
        id: 123123123,
        userIds: [1, 123, 1233],
        conversationName: 'test conversation',
        conversationImg: '/src/data/mocks/Contacts/images/Contact_1.jpg',
        conversationPage: conversationPageData,
        lastMessage: 'testowa ostatnia wiadomosc'
    },
    {
        id: 123,
        userIds: [1, 123],
        conversationName: 'conv2',
        conversationImg: '/src/data/mocks/Contacts/images/Contact_1.jpg',
        conversationPage: conversationPageData,
        lastMessage: 'elo'
    }
];

export default conversationsData;
