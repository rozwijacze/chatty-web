import Message from './Message';

export default interface ConversationPage {
    guid: number;
    messages: Message[];
}
