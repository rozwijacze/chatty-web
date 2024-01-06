import { getUserData } from '@utils/utils';
import { ReactComponent as UserIcon } from '/src/assets/user.svg';
import { ReactComponent as EditImageIcon } from '/src/assets/edit-image.svg';
import './Settings.scss';
import ButtonItem from '@components/ButtonItem/ButtonItem';
import { useLabels } from '@hooks/useLabels';

export default function Settings() {
    const labels = useLabels();
    const userData = getUserData();

    const PREFS = [
        {
            button: <ButtonItem children={labels.sideSettings.preferences.offline} />,
            value: 'No'
        },
        {
            button: <ButtonItem children={labels.sideSettings.preferences.theme} />,
            value: 'Light'
        },
        {
            button: <ButtonItem children={labels.sideSettings.preferences.locale} />,
            value: 'EN'
        },
        {
            button: <ButtonItem children={labels.sideSettings.preferences.delete} />
        }
    ];

    const DETAILS = [
        {
            label: labels.formLabels.name,
            value: userData?.name
        },
        {
            label: labels.formLabels.surname,
            value: userData?.surname
        },
        {
            label: labels.formLabels.email,
            value: userData?.email
        },
        {
            label: labels.formLabels.password,
            value: '***'
        }
    ];

    return (
        <div className="settings">
            <div className="settings__image" title={labels.sideSettings.image}>
                <UserIcon className="settings__icon" />
                <EditImageIcon className="settings__icon settings__icon--edit" />
            </div>

            <div className="settings__content">
                <h4>{labels.sideSettings.preferences.title}</h4>
                <ul className="settings__preferences">
                    {PREFS.map((item, key) => (
                        <li key={key}>
                            {item.button}
                            {item.value && <span>{item.value}</span>}
                        </li>
                    ))}
                </ul>

                <h4>{labels.sideSettings.details}</h4>
                <ul className="settings__account">
                    {DETAILS.map((item, key) => (
                        <li key={key}>
                            {item.label}
                            {item.value && <span>{item.value}</span>}
                            <ButtonItem children={labels.buttons.edit} />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
