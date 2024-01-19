import useLabels from '@hooks/useLabels';
import Locale from '@customTypes/Locale';
import Theme from '@customTypes/Theme';
import { Dialog } from '@contexts/DialogContext';

interface UserPreferences {
    buttonLabel: string;
    value?: string;
    dialog: Dialog;
}

export default function UserPreferences(): UserPreferences[] {
    const labels = useLabels();

    // TODO:
    // Probably there will be need for creating a seperate component for dialogForm
    // when we will be adding functionality to the dialogs

    return [
        {
            buttonLabel: labels.sideSettings.preferences.offline,
            value: 'No',
            dialog: {
                title: labels.sideSettings.preferences.offline,
                content: (
                    <form className="dialog-form">
                        <div className="dialog-form__input">
                            <input type="radio" name="alwaysOffline" id="yes" value={'Yes'} />
                            <label htmlFor="yes">{'Yes'}</label>
                        </div>
                        <div className="dialog-form__input">
                            <input type="radio" name="alwaysOffline" id="no" value={'No'} />
                            <label htmlFor="no">{'No'}</label>
                        </div>
                    </form>
                ),
                submitHandler: () => console.log('Done !')
            }
        },
        {
            buttonLabel: labels.sideSettings.preferences.theme,
            value: 'Light',
            dialog: {
                title: labels.sideSettings.preferences.theme,
                content: (
                    <form className="dialog-form">
                        <div className="dialog-form__input">
                            <input type="radio" name="preferredTheme" id="light" value={Theme.LIGHT} />
                            <label htmlFor="light">{Theme.LIGHT}</label>
                        </div>
                        <div className="dialog-form__input">
                            <input type="radio" name="preferredTheme" id="dark" value={Theme.DARK} />
                            <label htmlFor="dark">{Theme.DARK}</label>
                        </div>
                    </form>
                ),
                submitHandler: () => console.log('Done !')
            }
        },
        {
            buttonLabel: labels.sideSettings.preferences.locale,
            value: 'EN',
            dialog: {
                title: labels.sideSettings.preferences.locale,
                content: (
                    <form className="dialog-form">
                        <div className="dialog-form__input">
                            <input type="radio" name="preferredLocale" id="en" value={Locale.ENGLISH} />
                            <label htmlFor="en">{Locale.ENGLISH}</label>
                        </div>
                        <div className="dialog-form__input">
                            <input type="radio" name="preferredLocale" id="pl" value={Locale.POLISH} />
                            <label htmlFor="pl">{Locale.POLISH}</label>
                        </div>
                    </form>
                ),
                submitHandler: () => console.log('Done !')
            }
        },
        {
            buttonLabel: labels.sideSettings.preferences.delete,
            dialog: {
                title: labels.sideSettings.preferences.delete,
                content: <h4 style={{ color: 'red', textAlign: 'center' }}>{'Are you sure?'}</h4>,
                submitHandler: () => console.log('Account deleted !')
            }
        }
    ];
}
