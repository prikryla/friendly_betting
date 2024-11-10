import React from 'react';
import type { Metadata } from 'next';
// UTILS
import { poppins } from './ui/fonts';
import { ModalProvider } from './context/ModalContext/ModalContext';
// CSS
import './globals.scss';

export const metadata: Metadata = {
    title: 'Friendly Betting',
    icons: {
        icon: './favicon.ico',
    },
};

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='cs'>
            <body className={poppins.className}>
                <ModalProvider>{children}</ModalProvider>
            </body>
        </html>
    );
}
