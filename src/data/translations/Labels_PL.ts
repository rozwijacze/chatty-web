import Labels from './Labels';

const labels_PL: Labels = {
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
        title: 'Okno czatu'
    },
    sideContacts: {
        title: 'Kontakty'
    },
    sideConversations: {
        title: 'Konwersacje'
    },
    sideSettings: {
        title: 'Ustawienia',
        details: 'Dane konta',
        image: 'Zmień swoje zdjęcie',
        preferences: {
            title: 'Preferencje',
            offline: 'Zawsze niedostępny',
            theme: 'Ustaw preferowany motyw',
            locale: 'Ustaw preferowany język',
            delete: 'Usuń konto'
        }
    },
    formLayout: {
        subtitle: 'To nie klon messengera',
        description: {
            label: 'Utwórz swoje konto ',
            link: 'tutaj'
        }
    },
    formLabels: {
        name: 'Imię:',
        surname: 'Nazwisko:',
        email: 'E-mail:',
        password: 'Hasło:',
        repeatPassword: 'Powtórz hasło:'
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
        back: 'Wróć',
        edit: 'Edytuj',
        locale: 'Przełącz język',
        theme: 'Przełącz motyw'
    },
    optionsList: {
        close: 'Zamknij',
        open: 'Otwórz czat',
        block: 'Zablokuj',
        hide: 'Ukryj',
        delete: 'Usuń',
        mute: 'Wycisz powiadomienia',
        archive: 'Zarchiwizuj'
    },
    searchbar: {
        placeholder: 'Wyszukaj',
        clear: 'Wyczyść'
    },
    chatControls: {
        inputPlaceholder: 'Aa',
        buttonTitle: 'Wyślij wiadomość'
    }
};

export default labels_PL;
