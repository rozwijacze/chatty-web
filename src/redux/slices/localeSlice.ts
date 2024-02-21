import { createSlice } from '@reduxjs/toolkit';
import Locale from '@customTypes/Locale';

const storageLocale = localStorage.getItem('locale') as Locale;
const defaultLocale = storageLocale || Locale.ENGLISH;

// Saving default locale to localStorage on app init
(() => {
    if (!storageLocale) {
        localStorage.setItem('locale', defaultLocale);
    }
})();

const localeSlice = createSlice({
    name: 'locale',
    initialState: {
        value: defaultLocale
    },
    reducers: {
        toggleLocale(state) {
            switch (state.value) {
                default:
                    state.value = Locale.ENGLISH;
                    break;
                case Locale.ENGLISH:
                    state.value = Locale.POLISH;
                    break;
            }

            localStorage.setItem('locale', state.value);
        }
    }
});

export const { toggleLocale } = localeSlice.actions;
export default localeSlice.reducer;
