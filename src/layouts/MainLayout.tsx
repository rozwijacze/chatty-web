import { useContext } from 'react';
import { ChatWindow } from '../components/ChatWindow';
import Footer from '../components/Footer';
import SideNav from '../components/SideNav';
import { ThemeButton } from '../components/ThemeButton';
import TopNav from '../components/TopNav';
import { ThemeContext } from '../contexts/ThemeContext';

const MainLayout = () => {
    const { theme, toggleMode } = useContext(ThemeContext);

    return (
        <div className={theme}>
            <TopNav />
            <SideNav />
            <ChatWindow />
            <Footer />
            <ThemeButton toggleMode={toggleMode} />
        </div>
    );
};

export default MainLayout;
