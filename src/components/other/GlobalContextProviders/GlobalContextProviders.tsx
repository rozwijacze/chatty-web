import AuthContextProvider from '@contexts/AuthContext';
import DialogContextProvider from '@contexts/DialogContext';
import LocaleContextProvider from '@contexts/LocaleContext';
import React from 'react';

export default function GlobalContextProviders({ children }: React.PropsWithChildren) {
    return (
        <LocaleContextProvider>
            <DialogContextProvider>
                <AuthContextProvider>{children}</AuthContextProvider>
            </DialogContextProvider>
        </LocaleContextProvider>
    );
}
