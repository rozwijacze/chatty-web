import { useState } from 'react';
import SideMenu from '@components/SideMenu/SideMenu';
import SideWindow from '@components/SideWindow/SideWindow';
import ChatWindow from '@components/ChatWindow/ChatWindow';
import { ViewType } from '@customTypes/ViewType';
import './Home.scss';
import ChatContextProvider from '@contexts/ChatContext';

export default function Home() {
    const [view, setView] = useState<ViewType>(ViewType.CONVERSATIONS);

    return (
        <main className="home">
            <ChatContextProvider>
                <SideMenu view={view} setView={setView} />
                <SideWindow view={view} />
                <ChatWindow />
            </ChatContextProvider>
        </main>
    );
}
