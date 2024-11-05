import React from 'react';
import type { Metadata } from 'next';
import './globals.scss';
import { poppins } from './ui/fonts';

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
            <body className={poppins.className}>{children}</body>
        </html>
    );
}
