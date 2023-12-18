import { useState } from 'react';
import SideMenu from '../../components/SideMenu/SideMenu';
import SideWindow from '../../components/SideWindow/SideWindow';
import ChatWindow from '../../components/ChatWindow/ChatWindow';
import { ViewType } from '../../types/ViewType';
import './Home.scss';
import ChatContextProvider from '../../contexts/ChatContext';

export default function Home() {
    const [view, setView] = useState<ViewType>(ViewType.MESSAGES);

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
