import { SideNav } from '../../components/SideNav';
import { ChatWindow } from '../../components/ChatWindow';
import './Home.scss';
import { useTheme } from '../../hooks/useTheme';
import { TopNav } from '../../components/TopNav/TopNav';

export const Home = () => {
    return (
        <div className={`home`}>
            <TopNav />
            <SideNav />
            <ChatWindow />
        </div>
    );
};
