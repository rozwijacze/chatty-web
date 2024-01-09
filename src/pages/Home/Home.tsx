import { useState } from 'react';
import SideMenu from '@components/SideMenu/SideMenu';
import SideWindow from '@components/SideWindow/SideWindow';
import ChatWindow from '@components/ChatWindow/ChatWindow';
import { ViewType } from '@customTypes/ViewType';
import './Home.scss';
import ConversationContextProvider from '@contexts/ConversationContext';

export default function Home() {
    const [view, setView] = useState<ViewType>(ViewType.CONVERSATIONS);

    return (
        <main className="home">
            <SideMenu view={view} setView={setView} />
            <ConversationContextProvider>
                <SideWindow view={view} />
                <ChatWindow />
            </ConversationContextProvider>
        </main>
    );
}
