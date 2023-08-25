import { TopNav } from '../../components/TopNav';
import { SideNav } from '../../components/SideNav';
import { ChatWindow } from '../../components/ChatWindow';
import { ThemeButton } from '../../components/ThemeButton';
import { Footer } from '../../components/Footer';
import './Home.scss';
import { useTheme } from '../../hooks/useTheme';

export const Home = () => {
    const theme = useTheme();

    return (
        <div className={`home ${theme.mode}`}>
            <TopNav />
            <SideNav />
            <ChatWindow />
            <Footer />
            <ThemeButton toggleMode={theme.toggle} />
        </div>
    );
};
