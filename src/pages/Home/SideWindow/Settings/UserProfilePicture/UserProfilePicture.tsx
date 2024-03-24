import { ReactComponent as EditImageIcon } from '@assets/edit-image.svg';
import ButtonItem from '@components/common/ButtonItem/ButtonItem';
import { useDialogContext } from '@contexts/DialogContext';
import useLabels from '@hooks/useLabels';
import { useFilePicker } from 'use-file-picker';
import { FileAmountLimitValidator, FileSizeValidator, FileTypeValidator, ImageDimensionsValidator } from 'use-file-picker/validators';
import { SelectedFiles } from 'use-file-picker/types';

interface Props {
    className: string;
}

export default function UserProfilePicture({ className }: Props) {
    const labels = useLabels();
    const { initDialog, setDialogContent, dialogContent } = useDialogContext();

    const { openFilePicker, filesContent } = useFilePicker({
        accept: '.jpg, .png',
        validators: [
            new FileAmountLimitValidator({ max: 1 }),
            new FileTypeValidator(['jpg', 'png']),
            new FileSizeValidator({ maxFileSize: 3 * 1024 * 1024 /* 3 MB */ }),
            new ImageDimensionsValidator({
                maxHeight: 768, // in pixels
                maxWidth: 1024,
                minHeight: 156,
                minWidth: 156
            })
        ],
        onFilesRejected: ({ errors }) => {
            console.log(errors);
        },
        onFilesSuccessfullySelected: ({ plainFiles }: SelectedFiles<ArrayBuffer>) => {
            const fileName = plainFiles[0].name;
            setDialogContent(<div>{fileName}</div>)

            // initDialog({
            //     ...dialogConfig,
            //     content: (
            //         <div className="dialog-content dialog-content--column">
            //             <h5>{labels.dialog.profilePicture.selected}</h5>
            //             <p>{data.name}</p>
            //             <ButtonItem children={labels.buttons.edit} clickHandler={openFilePicker} />
            //         </div>
            //     )
            // });
        }
    });

    // TODO
    // submitHandler logs previously selected image instead of current
    // also submitHandler needs to be redefined in onFilesSuccessfullySelected method
    // because it only works when dialog is opened second time
    const dialogConfig = {
        title: labels.dialog.profilePicture.title,
        content: <ButtonItem children={labels.dialog.profilePicture.button} clickHandler={openFilePicker} />,
        submitHandler: () => 
            console.log(dialogContent)
            // filesContent.map(file => {
            //     console.log(data);
            // })
    };

    return <EditImageIcon className={className} onClick={() => initDialog(dialogConfig)} />;
}
