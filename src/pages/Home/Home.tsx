import { SideNav } from '../../components/SideNav';
import { ChatWindow } from '../../components/ChatWindow';
import './Home.scss';
import { TopNav } from '../../components/TopNav';
import { ThemeButton } from '../../components/ThemeButton';

export const Home = () => {
    return (
        <div className={`home`}>
            <TopNav />
            <SideNav />
            <ChatWindow />
            <ThemeButton />
        </div>
    );
};
