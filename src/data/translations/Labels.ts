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
    sideConversations: { title: string };
    sideSettings: {
        title: string;
        details: string;
        image: string;
        preferences: {
            title: string;
            offline: string;
            theme: string;
            locale: string;
            delete: string;
        };
    };
    formLayout: {
        subtitle: string;
        description: {
            label: string;
            link: string;
        };
    };
    formLabels: {
        name: string;
        surname: string;
        email: string;
        password: string;
        repeatPassword: string;
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
        edit: string;
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
    chatControls: {
        inputPlaceholder: string;
        buttonTitle: string;
    };
}
