import Overlay from '@components/layout/Overlay/Overlay';
import './Dialog.scss';
import ButtonItem from '@components/common/ButtonItem/ButtonItem';
import useLabels from '@hooks/useLabels';
import { Dialog } from '@contexts/DialogContext';

interface Props extends Dialog {
    closeDialog: () => void;
}

export default function Dialog({ title, content, submitHandler, closeDialog }: Props) {
    const labels = useLabels();

    return (
        <Overlay clickHandler={closeDialog}>
            <dialog className="dialog">
                <div className="dialog__close" onClick={closeDialog} title={labels.dialog.close}>
                    <span></span>
                    <span></span>
                </div>
                <h3>{title}</h3>
                <div className="dialog__content">{content}</div>
                <div className="dialog__buttons">
                    <ButtonItem children={labels.dialog.submit} title={labels.dialog.submit} clickHandler={submitHandler} />
                    <ButtonItem children={labels.dialog.cancel} title={labels.dialog.cancel} clickHandler={closeDialog} />
                </div>
            </dialog>
        </Overlay>
    );
}
