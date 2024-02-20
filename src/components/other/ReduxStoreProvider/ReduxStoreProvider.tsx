import store from '@redux/store';
import { Provider } from 'react-redux';

export default function ReduxStoreProvider({ children }: React.PropsWithChildren) {
    return <Provider store={store}>{children}</Provider>;
}
