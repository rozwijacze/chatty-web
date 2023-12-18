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
        title: 'Czat'
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
        formErrors: {
            repeatPassword: 'Hasła nie są identyczne.'
        },
        results: {
            succeed: 'Zarejestrowano pomyślnie!',
            unusualError: 'Wystąpił nieoczekiwany błąd.'
        }
    },
    buttons: {
        login: 'Zaloguj się',
        logout: 'Wyloguj się',
        register: 'Zarejestruj się',
        back: 'Wróć'
    },
    optionsList: {
        close: 'Zamknij',
        open: 'Otwórz czat',
        block: 'Zablokuj',
        hide: 'Ukryj',
        delete: 'Usuń',
        mute: 'Wycisz powiadomienia',
        archive: 'Zarchiwizuj'
    }
};
