import { TopNav } from '../../components/TopNav/TopNav';
import { SideNav } from '../../components/SideNav/SideNav';
import { ChatWindow } from '../../components/ChatWindow/ChatWindow';
import { Footer } from '../../components/Footer/Footer';
import { ThemeButton } from '../../components/ThemeButton/ThemeButton';
import './Home.scss';

export const Home = () => {
    return (
        <div className="home">
            <TopNav />
            <SideNav />
            <ChatWindow />
            <Footer />
            <ThemeButton />
        </div>
    );
};
