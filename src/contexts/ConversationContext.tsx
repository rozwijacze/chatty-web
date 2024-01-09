import { createContext, useState } from 'react';
import { useContextHook } from '@hooks/useContextHook';
import { Conversation } from '@customTypes/Conversation';

export interface ConversationContext {
    selectedConversation: Conversation | null;
    handleConversationSelect: (conversation: Conversation) => void;
}

const ConversationContext = createContext<ConversationContext | null>(null);
// eslint-disable-next-line react-refresh/only-export-components
export const useConversationContext = () => useContextHook(ConversationContext);

export default function ConversationContextProvider({ children }: React.PropsWithChildren) {
    const [selectedConversation, setSelectedConversation] = useState<Conversation | null>(null);
    const handleConversationSelect = (conversation: Conversation) => setSelectedConversation(conversation);

    return (
        <ConversationContext.Provider value={{ selectedConversation, handleConversationSelect }}>{children}</ConversationContext.Provider>
    );
}
