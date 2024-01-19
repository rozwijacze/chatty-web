import { createContext, useState } from 'react';
import useContextHook from '@hooks/useContextHook';
import Dialog from '@components/layout/Dialog/Dialog';
import LocaleContextProvider from '@contexts/LocaleContext';

export interface Dialog {
    title: string;
    content?: JSX.Element;
    submitHandler: () => void;
}

interface DialogContext {
    initDialog: (obj: Dialog) => void;
}

const DialogContext = createContext<DialogContext | null>(null);
// eslint-disable-next-line react-refresh/only-export-components
export const useDialogContext = () => useContextHook(DialogContext);

export default function DialogContextProvider({ children }: React.PropsWithChildren) {
    const [showDialog, setShowDialog] = useState(false);
    const toggleDialog = () => setShowDialog(!showDialog);

    const [dialog, setDialog] = useState<Dialog>({
        title: 'Dialog',
        submitHandler: toggleDialog
    });

    function initDialog(obj: Dialog) {
        setDialog(obj);
        toggleDialog();
    }

    return (
        <DialogContext.Provider value={{ initDialog }}>
            {children}
            <LocaleContextProvider>
                {showDialog && (
                    <Dialog
                        closeDialog={toggleDialog}
                        submitHandler={dialog.submitHandler}
                        content={dialog.content}
                        title={dialog.title}></Dialog>
                )}
            </LocaleContextProvider>
        </DialogContext.Provider>
    );
}
