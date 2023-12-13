import Labels from './Labels';

export const labels_PL: Labels = {
    authContext: {
        login: {
            invalidToken: 'Niepoprawny token.',
            resultError: 'Wystąpił błąd podczas logowania.'
        },
        register: {
            resultError: 'Wystąpił błąd podczas rejestracji.'
        }
    },
    error: {
        title: 'Przepraszamy, ta strona nie istnieje.'
    },
    chatWindow: {
        title: 'OknoCzatu'
    },
    sideContacts: {
        title: 'Kontakty'
    },
    sideMessages: {
        title: 'Wiadomości'
    },
    sideSettings: {
        title: 'Ustawienia'
    },
    formLayout: {
        subtitle: 'To nie klon messengera',
        description: {
            label: 'Utwórz swoje konto ',
            link: 'tutaj'
        }
    },
    login: {
        placeholder: {
            email: 'E-mail',
            password: 'Hasło'
        },
        button: 'Zaloguj się',
        results: {
            unusualError: 'Wystąpił nieoczekiwany błąd.'
        }
    },
    register: {
        labels: {
            nickname: 'Nickname:',
            email: 'E-mail:',
            password: 'Hasło:',
            repeatPassword: 'Powtórz hasło:'
        },
        buttons: {
            register: 'Zarejestruj się',
            link: 'Powrót'
        },
        formErrors: {
            repeatPassword: 'Hasła nie są identyczne.'
        },
        results: {
            succeed: 'Zarejestrowano pomyślnie!',
            unusualError: 'Wystąpił nieoczekiwany błąd.'
        }
    },
    optionsList: {
        close: 'Zamknij',
        open: 'Otwórz czat',
        block: 'Zablokuj',
        hide: 'Ukryj',
        delete: 'Usuń'
    }
};
