import Labels from './Labels';

const labels_PL: Labels = {
    appName: 'Chatty',
    authContext: {
        login: {
            invalidToken: 'Niepoprawny token.',
            resultError: 'Wystąpił błąd podczas logowania.'
        },
        register: {
            resultError: 'Wystąpił błąd podczas rejestracji.'
        },
        logout: {
            resultError: 'Wystąpił błąd podczas wylogowywania.'
        }
    },
    errors: {
        page: {
            title: 'Przepraszamy, ta strona nie istnieje.'
        },
        dbConnection: {
            title: 'Brak połączenia z bazą danych.'
        }
    },
    chatWindow: {
        title: 'Okno czatu',
        placeholder: 'Wybierz czat z listy.'
    },
    sideContacts: {
        title: 'Kontakty'
    },
    sideConversations: {
        title: 'Konwersacje'
    },
    sideSettings: {
        title: 'Ustawienia',
        image: 'Zmień swoje zdjęcie',
        preferences: {
            title: 'Preferencje',
            offline: 'Ustaw status na zawsze niedostępny',
            theme: 'Ustaw preferowany motyw',
            locale: 'Ustaw preferowany język',
            delete: 'Usuń konto'
        },
        details: {
            title: 'Dane użytkownika',
            name: 'Edytuj swoje imię',
            surname: 'Edytuj swoje nazwisko',
            email: 'Edytuj swój e-mail',
            password: 'Edytuj swoje hasło',
            passwordPlaceholder: '***'
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
        nickname: 'Pseudonim',
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
    },
    dialog: {
        submit: 'Zatwierdź',
        close: 'Zamknij',
        cancel: 'Anuluj',
        profilePicture: {
            title: 'Wybierz zdjęcie profilowe',
            button: 'Wybierz plik',
            selected: 'Plik wybrany'
        }
    },
    loadingText: 'Wczytywanie aplikacji...'
};

export default labels_PL;
