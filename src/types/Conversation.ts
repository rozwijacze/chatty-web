import { ConversationPage } from './ConversationPage';

export interface Conversation {
    id: number;
    userIds: number[];
    conversationName: string;
    conversationImg: string;
    conversationPage: ConversationPage;
    lastMessage?: string;
}
