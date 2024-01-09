import { ConversationPage } from '@customTypes/ConversationPage';
import messagesData from '@data/mocks/messagesData';

const conversationPagesData: ConversationPage[] = [
    {
        guid: 1,
        messages: [messagesData[0], messagesData[1], messagesData[3], messagesData[4]]
    },
    {
        guid: 2,
        messages: [messagesData[5], messagesData[6]]
    },
    {
        guid: 3,
        messages: [messagesData[7], messagesData[8], messagesData[2]]
    }
];

export default conversationPagesData;
