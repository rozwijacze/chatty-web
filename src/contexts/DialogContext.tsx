import { createContext, useState } from 'react';
import useContextHook from '@hooks/useContextHook';
import Dialog from '@components/layout/Dialog/Dialog';

export interface Dialog {
    title: string;
    content?: any;
    submitHandler: () => void;
}

interface DialogContext {
    initDialog: (obj: Dialog) => void;
    setDialogContent: any;
    dialogContent: any;
}

const DialogContext = createContext<DialogContext | null>(null);
// eslint-disable-next-line react-refresh/only-export-components
export const useDialogContext = () => useContextHook(DialogContext);

export default function DialogContextProvider({ children }: React.PropsWithChildren) {
    const [showDialog, setShowDialog] = useState(false);
    const [dialogContent, setDialogContent] = useState(<div></div>)
    const toggleDialog = () => setShowDialog(!showDialog);

    const [dialog, setDialog] = useState<Dialog>({
        title: 'Dialog',
        submitHandler: toggleDialog
    });

    function initDialog(obj: Dialog) {
        setDialog(obj);
        setDialogContent(obj.content)
        toggleDialog();
    }
    
    return (
        <DialogContext.Provider value={{ initDialog, setDialogContent, dialogContent }}>
            {children}
            {showDialog && (
                <Dialog
                    closeDialog={toggleDialog}
                    submitHandler={dialog.submitHandler}
                    content={dialogContent}
                    title={dialog.title}></Dialog>
            )}
        </DialogContext.Provider>
    );
}
