import { ConversationPage } from './ConversationPage';

export interface Conversation {
    id: number;
    userIds: number[];
    name: string;
    img: string;
    page: ConversationPage;
    lastMessage?: string;
}
