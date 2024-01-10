import { useState } from 'react';
import SideMenu from './SideMenu/SideMenu';
import SideWindow from './SideWindow/SideWindow';
import ChatWindow from './ChatWindow/ChatWindow';
import ViewType from '@customTypes/ViewType';
import './Home.scss';
import ConversationContextProvider from '@contexts/ConversationContext';

export default function Home() {
    const [view, setView] = useState(ViewType.CONVERSATIONS);

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
