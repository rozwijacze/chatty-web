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
        title: 'ChatWindow'
    },
    sideContacts: {
        title: 'Contacts'
    },
    sideMessages: {
        title: 'Messages'
    },
    sideSettings: {
        title: 'Settings'
    },
    formLayout: {
        subtitle: 'It is not a messenger clone',
        description: {
            label: 'Create an account ',
            link: 'here'
        }
    },
    login: {
        placeholder: {
            email: 'E-mail',
            password: 'Password'
        },
        button: 'Login',
        results: {
            unusualError: 'An unexpected error occurred.'
        }
    },
    register: {
        labels: {
            nickname: 'Nickname:',
            email: 'E-mail:',
            password: 'Password:',
            repeatPassword: 'Repeat password:'
        },
        buttons: {
            register: 'Register',
            link: 'Back'
        },
        formErrors: {
            repeatPassword: 'Passwords are not the same.'
        },
        results: {
            succeed: 'Registration successful!',
            unusualError: 'An unexpected error occurred.'
        }
    },
    optionsList: {
        close: 'Close',
        open: 'Open chat',
        block: 'Block',
        hide: 'Hide',
        delete: 'Delete'
    }
};
