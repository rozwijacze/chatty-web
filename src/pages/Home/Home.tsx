import { SideNav } from '../../components/SideNav';
import { ChatWindow } from '../../components/ChatWindow';
import './Home.scss';
import { useTheme } from '../../hooks/useTheme';
import { TopNav } from '../../components/TopNav/TopNav';

export const Home = () => {
    const theme = useTheme();

    return (
        <div className={`home ${theme.mode}`}>
            <TopNav />
            <SideNav />
            <ChatWindow />
        </div>
    );
};
