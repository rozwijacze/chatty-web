import AuthContextProvider from '@contexts/AuthContext';
import DialogContextProvider from '@contexts/DialogContext';
import React from 'react';

export default function GlobalContextProviders({ children }: React.PropsWithChildren) {
    return (
        <DialogContextProvider>
            <AuthContextProvider>{children}</AuthContextProvider>
        </DialogContextProvider>
    );
}
