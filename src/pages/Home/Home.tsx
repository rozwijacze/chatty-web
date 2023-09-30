import { useState } from 'react';
import { SideNav } from '../../components/SideNav/SideNav';
import { SideWindow } from '../../components/SideWindow/SideWindow';
import { ChatWindow } from '../../components/ChatWindow/ChatWindow';
import { ViewType } from '../../types/ViewType';
import './Home.scss';

export const Home = () => {
    const [view, setView] = useState<ViewType>(ViewType.MESSAGES);

    return (
        <main className="home">
            <SideNav view={view} setView={setView} />
            <SideWindow view={view} />
            <ChatWindow />
        </main>
    );
};
