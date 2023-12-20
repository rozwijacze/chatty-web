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
        button: string;
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
        buttons: {
            register: string;
            link: string;
        };
        formErrors: {
            repeatPassword: string;
        };
        results: {
            succeed: string;
            unusualError: string;
        };
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
    searchbar: {
        placeholder: string;
        clear: string;
    };
}
