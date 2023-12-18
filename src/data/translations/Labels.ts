export default interface Labels {
    authContext: {
        login: {
            invalidToken: string;
            resultError: string;
        };
        register: {
            resultError: string;
        };
    };
    error: { title: string };
    chatWindow: {
        title: string;
    };
    sideContacts: { title: string };
    sideMessages: { title: string };
    sideSettings: { title: string };
    formLayout: {
        subtitle: string;
        description: {
            label: string;
            link: string;
        };
    };
    login: {
        placeholder: {
            email: string;
            password: string;
        };
        results: {
            unusualError: string;
        };
    };
    register: {
        labels: {
            nickname: string;
            email: string;
            password: string;
            repeatPassword: string;
        };
        formErrors: {
            repeatPassword: string;
        };
        results: {
            succeed: string;
            unusualError: string;
        };
    };
    buttons: {
        login: string;
        logout: string;
        register: string;
        back: string;
    };
    optionsList: {
        close: string;
        open: string;
        block: string;
        hide: string;
        mute: string;
        archive: string;
        delete: string;
    };
}
