import { Dialog } from '@contexts/DialogContext';
import useLabels from '@hooks/useLabels';
import { getUserData } from '@helpers/UserHelper';

interface UserDetails {
    label: string;
    value?: string;
    dialog: Dialog;
}

export default function UserDetails(): UserDetails[] {
    const labels = useLabels();
    const userData = getUserData();

    // TODO:
    // Probably there will be need for creating a seperate component for dialogForm
    // when we will be adding functionality to the dialogs

    return [
        {
            label: labels.formLabels.name,
            value: userData?.name,
            dialog: {
                title: labels.sideSettings.details.name,
                content: <input defaultValue={userData?.name}></input>,
                submitHandler: () => console.log('You have edited your ' + labels.formLabels.name)
            }
        },
        {
            label: labels.formLabels.surname,
            value: userData?.surname,
            dialog: {
                title: labels.sideSettings.details.surname,
                content: <input defaultValue={userData?.surname}></input>,
                submitHandler: () => console.log('You have edited your ' + labels.formLabels.surname)
            }
        },
        {
            label: labels.formLabels.email,
            value: userData?.email,
            dialog: {
                title: labels.sideSettings.details.email,
                content: <input defaultValue={userData?.email}></input>,
                submitHandler: () => console.log('You have edited your ' + labels.formLabels.email)
            }
        },
        {
            label: labels.formLabels.password,
            value: labels.sideSettings.details.passwordPlaceholder,
            dialog: {
                title: labels.sideSettings.details.password,
                content: <input></input>,
                submitHandler: () => console.log('You have edited your ' + labels.formLabels.password)
            }
        }
    ];
}
