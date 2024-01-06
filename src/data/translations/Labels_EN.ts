import Labels from './Labels';

export const labels_EN: Labels = {
    authContext: {
        login: {
            invalidToken: 'Invalid token.',
            resultError: 'An error occurred while logging in.'
        },
        register: {
            resultError: 'An error occured while signing up.'
        }
    },
    error: {
        title: 'We are sorry, this page does not exist.'
    },
    chatWindow: {
        title: 'Chat'
    },
    sideContacts: {
        title: 'Contacts'
    },
    sideMessages: {
        title: 'Messages'
    },
    sideSettings: {
        title: 'Settings',
        details: 'Account details',
        image: 'Change your profile picture',
        preferences: {
            title: 'Preferences',
            offline: 'Always offline',
            theme: 'Set preferred theme',
            locale: 'Set preferred locale',
            delete: 'Delete account'
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
        edit: 'Edit'
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
    }
};
