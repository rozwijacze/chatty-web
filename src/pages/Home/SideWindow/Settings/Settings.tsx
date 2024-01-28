import { ReactComponent as UserIcon } from '@assets/user.svg';
import { ReactComponent as EditImageIcon } from '@assets/edit-image.svg';
import { useDialogContext } from '@contexts/DialogContext';
import './Settings.scss';
import ButtonItem from '@components/common/ButtonItem/ButtonItem';
import useLabels from '@hooks/useLabels';
import UserPreferences from './UserPreferences/UserPreferences';
import UserDetails from './UserDetails/UserDetails';

export default function Settings() {
    const labels = useLabels();
    const { initDialog } = useDialogContext();

    return (
        <div className="settings">
            <div className="settings__image" title={labels.sideSettings.image}>
                <UserIcon className="settings__icon" />
                <EditImageIcon className="settings__icon settings__icon--edit" />
            </div>

            <div className="settings__content">
                <h4>{labels.sideSettings.preferences.title}</h4>
                <ul className="settings__preferences">
                    {UserPreferences().map((pref, key) => (
                        <li key={key}>
                            <ButtonItem children={pref.buttonLabel} clickHandler={() => initDialog(pref.dialog)} />
                            {pref.value && <span>{pref.value}</span>}
                        </li>
                    ))}
                </ul>

                <h4>{labels.sideSettings.details.title}</h4>
                <ul className="settings__details">
                    {UserDetails().map((detail, key) => (
                        <li key={key}>
                            {detail.label}
                            {detail.value && <span>{detail.value}</span>}
                            <ButtonItem children={labels.buttons.edit} clickHandler={() => initDialog(detail.dialog)} />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
