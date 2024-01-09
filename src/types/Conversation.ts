import { Contact } from './Contact';
import { ConversationPage } from './ConversationPage';
import { Message } from './Message';

export interface Conversation {
    id: number;
    users: Contact[];
    name: string;
    img: string;
    page: ConversationPage;
    lastMessage?: Message;
}
