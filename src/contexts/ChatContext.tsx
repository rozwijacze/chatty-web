import { createContext, useState } from 'react';
import { useContextHook } from '@helpers/ContextHelper';
import { Conversation } from '@customTypes/Conversation';

export interface ChatContext {
    selectedChat: Conversation | null;
    handleChatSelect: (conversation: Conversation) => void;
}

const ChatContext = createContext<ChatContext | null>(null);
// eslint-disable-next-line react-refresh/only-export-components
export const useChatContext = () => useContextHook(ChatContext);

export default function ChatContextProvider({ children }: React.PropsWithChildren) {
    const [selectedChat, setSelectedChat] = useState<Conversation | null>(null);
    const handleChatSelect = (conversation: Conversation) => setSelectedChat(conversation);

    return <ChatContext.Provider value={{ selectedChat, handleChatSelect }}>{children}</ChatContext.Provider>;
}
