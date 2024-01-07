import { Message } from './Message';

export interface ConversationPage {
    guid: number;
    messages: Message[];
}
