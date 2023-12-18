import { createContext, useState } from 'react';
import { Contact } from '../types/Contact';
import { useContextHook } from '../helpers/ContextHelper';

export interface ChatContext {
    selectedChat: Contact | null;
    handleChatSelect: (contact: Contact) => void;
}

const ChatContext = createContext<ChatContext | null>(null);
// eslint-disable-next-line react-refresh/only-export-components
export const useChatContext = () => useContextHook(ChatContext);

export default function ChatContextProvider({ children }: React.PropsWithChildren) {
    const [selectedChat, setSelectedChat] = useState<Contact | null>(null);
    const handleChatSelect = (contact: Contact) => setSelectedChat(contact);

    return <ChatContext.Provider value={{ selectedChat, handleChatSelect }}>{children}</ChatContext.Provider>;
}
