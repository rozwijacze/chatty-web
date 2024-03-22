import Labels from './Labels';

const labels_EN: Labels = {
    appName: 'Chatty',
    authContext: {
        login: {
            invalidToken: 'Invalid token.',
            resultError: 'An error occurred while logging in.'
        },
        register: {
            resultError: 'An error occured while signing up.'
        },
        logout: {
            resultError: "No connection with database",
        },
    },
    error: {
        title: 'We are sorry, this page does not exist.'
    },
    chatWindow: {
        title: 'Chat window',
        placeholder: 'Select chat from the list.'
    },
    sideContacts: {
        title: 'Contacts'
    },
    sideConversations: {
        title: 'Conversations'
    },
    sideSettings: {
        title: 'Settings',
        image: 'Change your profile picture',
        preferences: {
            title: 'Preferences',
            offline: 'Set always offline status',
            theme: 'Set preferred theme',
            locale: 'Set preferred locale',
            delete: 'Delete account'
        },
        details: {
            title: 'User details',
            name: 'Edit your name',
            surname: 'Edit your surname',
            email: 'Edit your email',
            password: 'Edit your password',
            passwordPlaceholder: '***'
        }
    },
    formLayout: {
        subtitle: 'It is not a messenger clone',
        description: {
            label: 'Create an account ',
            link: 'here'
        }
    },
    formLabels: {
        nickname: 'Nickname',
        name: 'Name:',
        surname: 'Surname:',
        email: 'E-mail:',
        password: 'Password:',
        repeatPassword: 'Repeat password:'
    },
    login: {
        placeholder: {
            email: 'E-mail',
            password: 'Password'
        },
        results: {
            unusualError: 'An unexpected error occurred.'
        }
    },
    register: {
        formErrors: {
            repeatPassword: 'Passwords are not the same.'
        },
        results: {
            succeed: 'Registration successful!',
            unusualError: 'An unexpected error occurred.'
        }
    },
    buttons: {
        login: 'Login',
        logout: 'Logout',
        register: 'Register',
        back: 'Back',
        edit: 'Edit',
        locale: 'Toggle locale',
        theme: 'Toggle theme'
    },
    optionsList: {
        close: 'Close',
        open: 'Open chat',
        block: 'Block',
        hide: 'Hide',
        delete: 'Delete',
        mute: 'Mute notifications',
        archive: 'Archive'
    },
    searchbar: {
        placeholder: 'Search',
        clear: 'Clear'
    },
    chatControls: {
        inputPlaceholder: 'Aa',
        buttonTitle: 'Send message'
    },
    dialog: {
        submit: 'Submit',
        close: 'Close',
        cancel: 'Cancel'
    },
    loadingText: 'Application is loading...'
};

export default labels_EN;
