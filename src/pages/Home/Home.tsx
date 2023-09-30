import { SideNav } from '../../components/SideNav/SideNav';
import { SideWindow } from '../../components/SideWindow/SideWindow';
import { ChatWindow } from '../../components/ChatWindow/ChatWindow';
import './Home.scss';

export const Home = () => {
    return (
        <main className="home">
            <SideNav />
            <SideWindow />
            <ChatWindow />
        </main>
    );
};
